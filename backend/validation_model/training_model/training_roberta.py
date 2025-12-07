import pandas as pd
import torch
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, classification_report
import os
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np 

from datasets import Dataset
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer,
    pipeline
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

JSON_PATH = os.path.join(BASE_DIR, "../../dataset/training_data_roberta.json")

print(f"Wczytywanie danych z: {os.path.abspath(JSON_PATH)}")

df = pd.read_json(JSON_PATH)
df = df[["text", "label"]]
df["label"] = df["label"].astype(int)

train_texts, test_texts, train_labels, test_labels = train_test_split(
    df["text"].tolist(),
    df["label"].tolist(),
    test_size=0.2,
    random_state=42,
    shuffle=True,
    stratify=df["label"]
)

train_df = pd.DataFrame({"text": train_texts, "label": train_labels})
test_df  = pd.DataFrame({"text": test_texts,  "label": test_labels})

train_ds = Dataset.from_pandas(train_df)
test_ds  = Dataset.from_pandas(test_df)

# DEBUG PRINTS

print("TRAIN label distribution:")
print(pd.Series(train_labels).value_counts(normalize=True))

print("\nTEST label distribution:")
print(pd.Series(test_labels).value_counts(normalize=True))

MODEL_NAME = "allegro/herbert-base-cased"  

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME,
    num_labels=2
)

def tokenize(batch):
    return tokenizer(
        batch["text"],
        padding="max_length",
        truncation=True,
        max_length=256
    )

train_ds = train_ds.map(tokenize, batched=True)
test_ds  = test_ds.map(tokenize, batched=True)

train_ds.set_format("torch", columns=["input_ids", "attention_mask", "label"])
test_ds.set_format("torch", columns=["input_ids", "attention_mask", "label"])

def compute_metrics(pred):
    labels = pred.label_ids
    preds = pred.predictions.argmax(-1)

    acc = accuracy_score(labels, preds)
    f1  = f1_score(labels, preds)

    return {
        "accuracy": acc,
        "f1": f1
    }

training_args = TrainingArguments(
    output_dir="./wyniki",
    eval_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=8,
    weight_decay=0.01,
    logging_dir="./logi",
    logging_steps=20,
    load_best_model_at_end=True,
    metric_for_best_model="f1"
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_ds,
    eval_dataset=test_ds,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics
)

# Train and capture training history
training_result = trainer.train()

print("\n=== WYNIKI NA ZBIORZE TESTOWYM ===")
eval_results = trainer.evaluate()

# Plot training metrics
log_history = trainer.state.log_history

# Extract training and validation metrics
train_loss = []
eval_loss = []
eval_accuracy = []
eval_f1 = []
epochs = []

for entry in log_history:
    if 'loss' in entry and 'epoch' in entry:
        train_loss.append(entry['loss'])
    if 'eval_loss' in entry:
        eval_loss.append(entry['eval_loss'])
        eval_accuracy.append(entry.get('eval_accuracy', 0))
        eval_f1.append(entry.get('eval_f1', 0))
        epochs.append(entry['epoch'])

# Create visualization directory
VIS_DIR = "./visualizations"
os.makedirs(VIS_DIR, exist_ok=True)

# Plot 1: Training and Validation Loss
if eval_loss:
    plt.figure(figsize=(10, 6))
    plt.plot(epochs, eval_loss, 'b-o', label='Validation Loss')
    plt.xlabel('Epoch')
    plt.ylabel('Loss')
    plt.title('Training Progress - Loss')
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.savefig(os.path.join(VIS_DIR, 'training_loss.png'), dpi=300, bbox_inches='tight')
    plt.close()
    print(f"\nSaved training loss plot to {os.path.join(VIS_DIR, 'training_loss.png')}")

# Plot 2: Accuracy and F1 Score
if eval_accuracy and eval_f1:
    plt.figure(figsize=(10, 6))
    plt.plot(epochs, eval_accuracy, 'g-o', label='Accuracy')
    plt.plot(epochs, eval_f1, 'r-s', label='F1 Score')
    plt.xlabel('Epoch')
    plt.ylabel('Score')
    plt.title('Model Performance Metrics')
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.ylim([0, 1.1])
    plt.savefig(os.path.join(VIS_DIR, 'metrics.png'), dpi=300, bbox_inches='tight')
    plt.close()
    print(f"Saved metrics plot to {os.path.join(VIS_DIR, 'metrics.png')}")

# Generate predictions for confusion matrix
predictions = trainer.predict(test_ds)
y_pred = predictions.predictions.argmax(-1)
y_true = predictions.label_ids

# Plot 3: Confusion Matrix
cm = confusion_matrix(y_true, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
            xticklabels=['Class 0', 'Class 1'],
            yticklabels=['Class 0', 'Class 1'])
plt.title('Confusion Matrix')
plt.ylabel('True Label')
plt.xlabel('Predicted Label')
plt.savefig(os.path.join(VIS_DIR, 'confusion_matrix.png'), dpi=300, bbox_inches='tight')
plt.close()
print(f"Saved confusion matrix to {os.path.join(VIS_DIR, 'confusion_matrix.png')}")

# Print detailed classification report
print("\n=== CLASSIFICATION REPORT ===")
print(classification_report(y_true, y_pred, target_names=['Class 0 (Not ZUS)', 'Class 1 (ZUS)']))

# Print confusion matrix values
print("\n=== CONFUSION MATRIX ===")
print(f"True Negatives: {cm[0, 0]}")
print(f"False Positives: {cm[0, 1]}")
print(f"False Negatives: {cm[1, 0]}")
print(f"True Positives: {cm[1, 1]}")

SAVE_PATH = "./model_zus"
trainer.save_model(SAVE_PATH)
tokenizer.save_pretrained(SAVE_PATH)

print(f"\nModel zapisany w: {SAVE_PATH}")

clf = pipeline(
    "text-classification",
    model=SAVE_PATH,
    tokenizer=SAVE_PATH
)

test_text = "Poszkodowany spadł z drabiny podczas montażu reklamy."
result = clf(test_text)

print("\n=== TESTOWA PREDYKCJA ===")
print(test_text)
print(result)
