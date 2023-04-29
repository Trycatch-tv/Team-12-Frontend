import { createSlice } from "@reduxjs/toolkit";

export const pruebaSlice = createSlice({
  name: "prueba",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = pruebaSlice.actions;
