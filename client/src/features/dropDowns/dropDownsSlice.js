import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const dropDownsAdapter = createEntityAdapter();

const initialState = dropDownsAdapter.getInitialState({
  showSideBar: false,
  showLogButton: false,
});

const dropDownsSlice = createSlice({
  name: "dropDowns",
  initialState,
  reducers: {
    toggleSideBar(state, action) {
      state.showSideBar = action.payload;
    },
    toggleLogButton(state, action) {
      state.showLogButton = action.payload;
    },
  },
});

export const { toggleSideBar, toggleLogButton } = dropDownsSlice.actions;

export default dropDownsSlice.reducer;
