'use client';

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
// ...existing code...

export default function KlientWniosek() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  function handlePdfUpload() {
    fileInputRef.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name.toLowerCase();
      if (fileName.slice(-3) === 'pdf') {
        // File is a PDF, handle upload logic here
        console.log('PDF file selected:', file);
      } else {
        alert('Please select a PDF file.');
      }
    }
  }

  const [uploadedFile, setUploadedFile] = useState(false);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name.toLowerCase();
      if (fileName.slice(-3) === 'pdf') {
        console.log('PDF file selected:', file);
        setUploadedFile(true);
        setTimeout(() => setUploadedFile(false), 3000);
      } else {
        alert('Please select a PDF file.');
      }
    }
  }

  return (
    <div className="KlientWniosekContainer"> 
      <div className="WniosekButtonsWrapper">
        <button className={"Wniosek3 WniosekButton"} onClick={() => router.push('/Wniosek3')}>Zapis Wyjaśniający</button>
        <button className={"Wniosek4 WniosekButton"} onClick={() => router.push('/Wniosek4')}>Zawiadomienie</button>
      </div>  
      <div className="WniosekButtonsWrapper">
        <button className={"Wniosek5 WniosekButton"} onClick={handlePdfUpload}>Prześlij Wniosek PDF</button>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      {uploadedFile && (
        <div className="WniosekButtonsWrapper">
          <p className="text-sm">File Uploaded!</p>
        </div>
      )}
    </div>
  );
}