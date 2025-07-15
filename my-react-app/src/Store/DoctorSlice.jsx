// redux/DoctorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const state = localStorage.getItem("doctorAssociatedHospitals");
    return state ? JSON.parse(state) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("doctorAssociatedHospitals", JSON.stringify(state));
  } catch (err) {}
};

const initialState = {
  doctorAssociatedHospitals: loadState(),
};

const DoctorSlice = createSlice({
  name: "DoctorSlice",
  initialState,
  reducers: {
    addAssociation: (state, action) => {
      state.doctorAssociatedHospitals.push(action.payload);
      saveState(state.doctorAssociatedHospitals);
    },
    addAvailability: (state, action) => {
      const { doctorName, hospitalId, availability } = action.payload;
      const doc = state.doctorAssociatedHospitals.find(
        (d) => d.doctorName === doctorName && d.hospitalId === hospitalId
      );
      if (doc) {
        doc.availability.push(availability);
        saveState(state.doctorAssociatedHospitals);
      }
    },
  },
});

export const { addAssociation, addAvailability } = DoctorSlice.actions;
export default DoctorSlice.reducer;
