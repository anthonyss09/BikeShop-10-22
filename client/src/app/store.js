import { configureStore, createReducer } from "@reduxjs/toolkit";
import usersSliceReducer from "../features/users/usersSlice";
import { apiSlice } from "../features/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
