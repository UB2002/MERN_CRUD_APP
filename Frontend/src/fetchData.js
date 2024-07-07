import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fetchData.css'
const GetPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees(); // Fetch employees when component mounts
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://mern-crud-app-8i8f.onrender.com/get');
      setEmployees(response.data); // Update state with fetched employees
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
  return (
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
  );
};

export default GetPage;