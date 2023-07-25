import React, { useState } from 'react';

const Upload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }


    onFileUpload(file);
    setFile(null);
    setError('');
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" name="csvFile" onChange={handleFileChange} />
      {error && <p>{error}</p>}
      <button type="button" onClick={handleFileUpload}>
        Upload
      </button>
    </div>
  );
};

export default Upload;
