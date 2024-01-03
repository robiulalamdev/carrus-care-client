import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rForm1: null,
  rForm2: null,
  prfId: "",
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
    setPrfId: (state, action) => {
      state.prfId = action.payload;
    },
  },
});

export const { setRForm1, setRForm2, setPrfId } = formSlice.actions;

export default formSlice.reducer;
