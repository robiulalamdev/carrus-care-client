import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rForm1: null,
  rForm2: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setRForm1: (state, action) => {
      state.rForm1 = action.payload;
    },
    setRForm2: (state, action) => {
      state.rForm2 = action.payload;
    },
  },
});

export const { setRForm1, setRForm2 } = formSlice.actions;

export default formSlice.reducer;
