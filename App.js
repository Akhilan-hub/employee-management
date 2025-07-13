import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: '', role: '' });

  // Load employees on page load
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/employees", form)
      .then(() => {
        alert("Employee added!");
        setForm({ name: '', role: '' });
        window.location.reload(); // Refresh the list
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>

      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>{emp.name} - {emp.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
