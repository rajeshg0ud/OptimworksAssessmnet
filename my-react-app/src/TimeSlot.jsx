// components/Doctor/TimeSlotForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAvailability } from "./Store/DoctorSlice";

const TimeSlotForm = ({ doctor, hospitalId }) => {
  const [slot, setSlot] = useState({ date: "", from: "", to: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAvailability({
        doctorName: doctor.name,
        hospitalId,
        availability: slot,
      })
    );
    setSlot({ date: "", from: "", to: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Availability</h4>
      <input
        type="date"
        name="date"
        value={slot.date}
        onChange={(e) => setSlot({ ...slot, date: e.target.value })}
      />
      <input
        type="time"
        name="from"
        value={slot.from}
        onChange={(e) => setSlot({ ...slot, from: e.target.value })}
      />
      <input
        type="time"
        name="to"
        value={slot.to}
        onChange={(e) => setSlot({ ...slot, to: e.target.value })}
      />
      <button type="submit">Add Slot</button>
    </form>
  );
};

export default TimeSlotForm;
