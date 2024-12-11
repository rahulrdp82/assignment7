import React, { useState } from 'react';

function FileUpload({ setData }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile); 
  };

  const handleFileSubmit = (event) => {
    event.preventDefault(); 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result); 
          setData(jsonData); 
        } catch (error) {
          alert("Error parsing the file. Please upload a valid JSON file.");
        }
      };
      reader.readAsText(file);  
    } else {
      alert("Please upload a file first.");
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: 20 }}>
      <h2>Upload a JSON File for Visualization</h2>
      <form onSubmit={handleFileSubmit}>
        <input 
          type="file" 
          accept=".json" 
          onChange={handleFileChange} 
        />
        <button type="submit">Submit</button>
      </form>
      
      
    </div>
  );
}

export default FileUpload;
