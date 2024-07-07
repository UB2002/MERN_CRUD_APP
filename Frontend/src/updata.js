/*
import React, { useState } from 'react';
import axios from 'axios';
//import './UpdateEmployeeById.css'; // Import CSS file for styling
import './App.css'

const UpdateEmployeeById = () => {
  const [updatedEmployee, setUpdatedEmployee] = useState({
    employ_id: '',
    name: '',
    department_id: '',
    department_name: '',
    sallery: ''
  });
  const [employeeId, setEmployeeId] = useState('');

  const handleUpdate = async () => {
    if (!employeeId) {
      alert('Please enter employee ID');
      return;
    }

    const updatedFields = {};
    Object.keys(updatedEmployee).forEach(key => {
      if (updatedEmployee[key]) {
        updatedFields[key] = updatedEmployee[key];
      }
    });

    try {
      await axios.put(`http://localhost:3000/employees/${employeeId}`, updatedFields);
      alert('Employee data updated successfully');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleInputChange = (e) => {
    setEmployeeId(e.target.value);
  };

  return (
    <div className="form">
      <h2>Update Employee by ID</h2>
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
      <label>
        Employee Name:
        <input
          type="text"
          name="name"
          value={updatedEmployee.name}
          onChange={handleChange}
          placeholder="Employee Name"
        />
      </label>
      <br />
      <label>
        Department ID:
        <input
          type="text"
          name="department_id"
          value={updatedEmployee.department_id}
          onChange={handleChange}
          placeholder="Department ID"
        />
      </label>
      <br />
      <label>
        Department Name:
        <input
          type="text"
          name="department_name"
          value={updatedEmployee.department_name}
          onChange={handleChange}
          placeholder="Department Name"
        />
      </label>
      <br />
      <label>
        Salary:
        <input
          type="text"
          name="sallery"
          value={updatedEmployee.sallery}
          onChange={handleChange}
          placeholder="Salary"
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Update Employee</button>
    </div>
  );
};

export default UpdateEmployeeById;
 */

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const UpdateEmployeeById = () => {
  const [updatedEmployee, setUpdatedEmployee] = useState({
    employ_id: '',
    name: '',
    department_id: '',
    department_name: '',
    sallery: ''
  });
  const [employeeId, setEmployeeId] = useState('');
  const [updatedData, setUpdatedData] = useState(null); // State to store updated employee data

  const handleUpdate = async () => {
    if (!employeeId) {
      alert('Please enter employee ID');
      return;
    }

    const updatedFields = {};
    Object.keys(updatedEmployee).forEach(key => {
      if (updatedEmployee[key]) {
        updatedFields[key] = updatedEmployee[key];
      }
    });

    try {
      await axios.put(`https://nodejs-crud-pdnl.onrender.com/employees/${employeeId}`, updatedFields);
      alert('Employee data updated successfully');

      // Fetch the updated employee data after successful update
      const response = await axios.get(`https://nodejs-crud-pdnl.onrender.com/employees/${employeeId}`);
      setUpdatedData(response.data); // Update state with the updated data
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleInputChange = (e) => {
    setEmployeeId(e.target.value);
  };

  return (
    <div className="form">
      <h2>Update Employee by ID</h2>
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
      <label>
        Employee Name:
        <input
          type="text"
          name="name"
          value={updatedEmployee.name}
          onChange={handleChange}
          placeholder="Employee Name"
        />
      </label>
      <br />
      <label>
        Department ID:
        <input
          type="text"
          name="department_id"
          value={updatedEmployee.department_id}
          onChange={handleChange}
          placeholder="Department ID"
        />
      </label>
      <br />
      <label>
        Department Name:
        <input
          type="text"
          name="department_name"
          value={updatedEmployee.department_name}
          onChange={handleChange}
          placeholder="Department Name"
        />
      </label>
      <br />
      <label>
        Salary:
        <input
          type="text"
          name="sallery"
          value={updatedEmployee.sallery}
          onChange={handleChange}
          placeholder="Salary"
        />
      </label>
      <br />
      <button className ='updateButton' onClick={handleUpdate}>Update Employee</button>

      {/* Display the updated employee data */}
      {updatedData && (
        <div>
          <h2>Updated Employee Data</h2>
          <p>Employee ID: {updatedData.employ_id}</p>
          <p>Name: {updatedData.name}</p>
          <p>Department ID: {updatedData.department_id}</p>
          <p>Department Name: {updatedData.department_name}</p>
          <p>Salary: {updatedData.sallery}</p>
        </div>
      )}
    </div>
  );
};

export default UpdateEmployeeById;
