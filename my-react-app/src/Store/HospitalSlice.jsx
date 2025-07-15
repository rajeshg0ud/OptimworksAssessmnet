import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("Hospitals");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from local storage:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("Hospitals", serializedState);
  } catch (err) {
    console.error("Error saving state to local storage:", err);
  }
};

const initialState = { Hospitals: [] };

const persistedState = loadState();
if (
  persistedState &&
  persistedState.Hospitals &&
  Array.isArray(persistedState.Hospitals)
) {
  initialState.Hospitals = persistedState.Hospitals;
} else {
  saveState(initialState);
}

const Slice = createSlice({
  name: "Slice",
  initialState: initialState,
  reducers: {
    addHospitals: (state, action) => {
      const exist = state.Hospitals.find((p) => p.name === action.payload.name);
      if (!exist) {
        state.Hospitals.push(action.payload);
        saveState(state);
        console.log(action.payload);
        console.log("updated state", state);
      }
    },
    editHospitals: (state, action) => {
      state.Hospitals.filter((p) => p.name !== action.payload.name);

      state.Hospitals.push(action.payload);
      saveState(state);
    },
  },
});

export const { addHospitals, editHospitals } = Slice.actions;

export default Slice.reducer;
