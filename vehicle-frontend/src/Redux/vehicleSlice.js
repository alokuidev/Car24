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
    data: [],       // ✅ Ensure this is an array
    filteredData: [], // ✅ Ensure this is an array
    loading: false,
    error: null,
  },
  reducers: {
    filterVehicles: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredData = state.data.filter(
        (vehicle) =>
          vehicle.make.toLowerCase().includes(searchTerm) ||
          vehicle.model.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload; // ✅ Initialize filteredData with all vehicles
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterVehicles } = vehicleSlice.actions;
export default vehicleSlice.reducer;
