import React, { useState } from "react";
import Admin from "./Admin";
import Doctor from "./RegisterDoctor";
import Patient from "./Patient";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem("userInfo", JSON.stringify(formData));
  };

  const userInfoString = localStorage.getItem("userInfo");
  const userLoggedIn = userInfoString ? JSON.parse(userInfoString) : null;

  return userLoggedIn ? (
    <div className="Navigation-Bar">
      {userLoggedIn.role == "admin" && <Admin />}
      {userLoggedIn.role == "doctor" && <Doctor />}
      {userLoggedIn.role == "patient" && <Patient />}
    </div>
  ) : (
    <div className="register-container">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default RegisterPage;
