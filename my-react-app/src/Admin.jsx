import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHospitals, editHospitals } from "./Store/HospitalSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const { Hospitals } = useSelector((store) => store?.Slice);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    department: "",
  });

  const [editData, setEditData] = useState([]);

  useEffect(() => {
    setEditData(Hospitals);
  }, [Hospitals]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEditData = JSON.parse(JSON.stringify(editData));
    updatedEditData[index][name] = value;
    setEditData(updatedEditData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHospitals(formData));
    setFormData({ name: "", location: "", department: "" });
  };

  const handleSaveChanges = (index) => {
    dispatch(editHospitals(editData[index]));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="register-container">
          <h1>Add new Hospital</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="register-container">
        <h1>Listed Hospitals</h1>

        <div className="HospitalMainContainer">
          {editData.map((hospital, index) => (
            <div className="HospitalContainer" key={hospital.name + index}>
              <input
                type="text"
                name="name"
                value={hospital.name}
                onChange={(e) => handleEditChange(index, e)}
              />
              <input
                type="text"
                name="location"
                value={hospital.location}
                onChange={(e) => handleEditChange(index, e)}
              />
              <input
                type="text"
                name="department"
                value={hospital.department}
                onChange={(e) => handleEditChange(index, e)}
              />

              <button onClick={() => handleSaveChanges(index)}>
                Save Changes
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
