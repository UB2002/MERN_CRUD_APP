import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fetchData.css';

const GetPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);  // Added loading state
  const [error, setError] = useState(null);     // Added error state

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
      setError('Error fetching employees.');  // Set error message
    } finally {
      setLoading(false);  // Set loading to false when request is done
    }
  };

  if (loading) return <p>Loading...</p>;  // Show loading state
  if (error) return <p>{error}</p>;  // Show error message

  return (
    <div className="container">
      <h2>Employee List</h2>
      <div className="card-container">
        {employees.length > 0 ? (
          employees.map(employee => (
            <div key={employee._id} className="card">
              <h3>{employee.name}</h3>
              <p>_id : {employee._id}</p>
              <p>Department: {employee.department_name}</p>
              <p>Salary: {employee.sallery}</p>
            </div>
          ))
        ) : (
          <p>No employees found</p>
        )}
      </div>
    </div>
  );
};

export default GetPage;
