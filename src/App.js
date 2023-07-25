import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Papa from 'papaparse';
import Upload from './component/Upload';
import List from './component/List';

const App = () => {
  const [csvData, setCSVData] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const parsedData = Papa.parse(result, { header: true, skipEmptyLines: true });

      if (parsedData.errors.length > 0) {
        alert('Invalid file format');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const invalidEmails = parsedData.data.filter((row) => !emailRegex.test(row.Email));
      if (invalidEmails.length > 0) {
        alert('Invalid email addresses found');
        return;
      }

      const invalidGenders = parsedData.data.filter(
        (row) => !['male', 'female', 'others'].includes(row.Gender.toLowerCase())
      );
      if (invalidGenders.length > 0) {
        alert('Invalid gender values found');
        return;
      }

      setCSVData(parsedData.data);
    };

    reader.readAsText(file);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/upload" element={<Upload onFileUpload={handleFileUpload} />} />
          <Route path="/list" element={<List csvData={csvData} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
