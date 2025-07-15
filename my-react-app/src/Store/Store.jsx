import { configureStore } from "@reduxjs/toolkit";
import Slice from "./HospitalSlice";
import DoctorSlice from "./DoctorSlice";

const store = configureStore({
  reducer: {
    Slice: Slice,
    doctorSlice: DoctorSlice,
  },
});

export default store;
