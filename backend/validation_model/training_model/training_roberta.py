import pandas as pd
import torch
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score
import os 

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



trainer.train()



print("\n=== WYNIKI NA ZBIORZE TESTOWYM ===")
trainer.evaluate()


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
