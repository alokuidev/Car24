import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicleSlice"; // 👈 Ensure correct import

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer, // 👈 Ensure key matches `useSelector(state => state.vehicles)`
  },
});
