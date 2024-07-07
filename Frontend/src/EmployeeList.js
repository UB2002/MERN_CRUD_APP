
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    employ_id: '',
    name: '',
    department_id: '',
    department_name: '',
    sallery: ''
  });

  useEffect(() => {
    fetchEmployees(); // Fetch employees when component mounts
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://mern-crud-app-8i8f.onrender.com/get');
      setEmployees(response.data); // Update state with fetched employees
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mern-crud-app-8i8f.onrender.com/post', newEmployee);
      // After successful POST request, fetch updated employee list
      fetchEmployees();
      // Reset form fields
      setNewEmployee({
        employ_id: '',
        name: '',
        department_id: '',
        department_name: '',
        sallery: ''
      });
      console.log(setNewEmployee);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      
      <div className='form'>
      <h2>POST data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employ_id"
          value={newEmployee.employ_id}
          onChange={handleChange}
          placeholder="Employee ID"
          />
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleChange}
          placeholder="Name"
          />
        <input
          type="text"
          name="department_id"
          value={newEmployee.department_id}
          onChange={handleChange}
          placeholder="Department ID"
          />
        <input
          type="text"
          name="department_name"
          value={newEmployee.department_name}
          onChange={handleChange}
          placeholder="Department Name"
          />
        <input
          type="text"
          name="sallery"
          value={newEmployee.sallery}
          onChange={handleChange}
          placeholder="Salary"
          />
        <button type="submit">Add Employee</button>
      </form>
          </div>
          <div className="container">
      <h2>Employee List</h2>
      <div className="card-container">
        {employees.map(employee => (
          <div key={employee._id} className="card">
            <h3>{employee.name}</h3>
            <p>Department: {employee.department_name}</p>
            <p>Salary: {employee.sallery}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EmployeeList;
