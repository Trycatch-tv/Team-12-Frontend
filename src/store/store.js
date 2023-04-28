import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, pruebaSlice, authSlice } from "./";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    prueba: pruebaSlice.reducer,
    auth: authSlice.reducer,
  },
});
