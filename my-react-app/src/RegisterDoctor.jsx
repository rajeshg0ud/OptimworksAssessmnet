// components/Doctor/RegisterDoctor.jsx
import React, { useState, useEffect } from "react";

const RegisterDoctor = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    specialization: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("currDoctor", JSON.stringify(formData));
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-container">
      <h2>Register as Doctor</h2>
      {["name", "qualification", "specialization", "experience"].map(
        (field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
          />
        )
      )}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterDoctor;
