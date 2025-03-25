import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch vehicles from API
export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async () => {
    const response = await axios.get("http://localhost:5000/api/vehicles");
    return response.data; // Make sure API returns an array
  }
);

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    data: [],   // 👈 Ensure this is an array (not undefined)
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // 👈 Ensure API returns an array
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default vehicleSlice.reducer;
