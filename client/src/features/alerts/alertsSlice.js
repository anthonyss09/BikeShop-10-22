import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertType: "",
  alertText: "",
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    displayAlert(state, action) {
      state.showAlert = true;
      state.alertType = action.payload.alertType;
      state.alertText = action.payload.alertText;
    },
    clearAlert(state, action) {
      state.showAlert = false;
      state.alertType = "";
      state.alertText = "";
    },
  },
});

export const { displayAlert, clearAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
