import React, { useState } from 'react';
import axios from 'axios';
import './delete.css'

const DeleteEmployeeById = () => {
  const [employeeId, setEmployeeId] = useState('');

  const handleDelete = async () => {
    if (!employeeId) {
      alert('Please enter employee ID');
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/delete/${employeeId}`);
      alert('Employee data deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleInputChange = (e) => {
    setEmployeeId(e.target.value);
  };

  return (
    <div className='container'>
      <h2 className='text'>Delete Employee by ID</h2>
      <label>
        Enter Employee ID:
        <input
          type="text"
          value={employeeId}
          onChange={handleInputChange}
          placeholder="Employee ID"
        />
      </label>
      <br />
      <button onClick={handleDelete}>Delete Employee</button>
    </div>
  );
};

export default DeleteEmployeeById;
