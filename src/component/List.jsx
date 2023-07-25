import React from 'react';

const List = ({ csvData }) => {
  return (
    <div>
      <h2>CSV Data List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              <td>{row.Name}</td>
              <td>{row.Email}</td>
              <td>{row.Phone}</td>
              <td>{row.Gender}</td>
              <td>{row.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
