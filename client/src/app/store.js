import { configureStore, createReducer } from "@reduxjs/toolkit";
import usersSliceReducer from "../features/users/usersSlice";
import { apiSlice } from "../features/api/apiSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import dropDownsSliceReducer from "../features/dropDowns/dropDownsSlice";
import alertsSliceReducer from "../features/alerts/alertsSlice";

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
    cart: cartSliceReducer,
    dropDowns: dropDownsSliceReducer,
    alerts: alertsSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
