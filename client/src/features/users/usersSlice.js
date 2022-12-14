import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { displayAlert, clearAlert } from "../alerts/alertsSlice";

import axios from "axios";

const usersAdapter = createEntityAdapter();

const currentUser = JSON.parse(localStorage.getItem("user")) || null;
const userId = currentUser ? currentUser._id : null;

const initialState = usersAdapter.getInitialState({
  ids: currentUser ? [currentUser._id] : [],
  entities: currentUser ? { [userId]: { ...currentUser } } : {},
  token: localStorage.getItem("token") || null,
  user: currentUser ? currentUser : null,
});

export const registerUser = createAsyncThunk(
  "users/register",
  async (
    { firstName, lastName, email, password, userCart },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axios.post("/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        userCart,
      });
      dispatch(
        displayAlert({
          alertType: "success",
          alertText: "Registered user, redirecting...",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
        window.location.href = "/";
      }, 3000);
      return response.data;
    } catch (error) {
      dispatch(
        displayAlert({
          alertType: "error",
          alertText: error.response.data.error,
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      throw rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const user = await axios.post("/api/auth/login", {
        email,
        password,
      });
      dispatch(
        displayAlert({
          alertType: "success",
          alertText: "Logged user, redirecting...",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
        window.location.href = "/";
      }, 3000);
      return user.data;
    } catch (error) {
      dispatch(
        displayAlert({
          alertType: "error",
          alertText: error.response.data.error,
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      throw rejectWithValue(error.response.data);
    }
  }
);
//update user for both adding and removing items from user cart in db
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userId, update }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch("/api/auth/updateUserCart", {
        userId,
        update,
      });
      dispatch(
        displayAlert({
          alertType: "success",
          alertText: "Item added to cart.",
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      return response.data;
    } catch (error) {
      dispatch(
        displayAlert({
          alertType: "error",
          alertText: error.response.data.error,
        })
      );
      setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);
      throw rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addItemToUserCart(state, action) {
      let update = {};
      update = { ...action.payload };
      delete update.userId;
      const userCart = state.entities[action.payload.userId].userCart;
      const prodIds = userCart.map((prod) => prod._id);
      if (prodIds.includes(action.payload._id)) {
        const index = prodIds.indexOf(action.payload._id);
        userCart[index].count++;
      } else {
        userCart.push(update);
      }
      localStorage.setItem(
        "user",
        JSON.stringify(state.entities[action.payload.userId])
      );
      state.user = state.entities[action.payload.userId];
    },
    removeItemFromUserCart(state, action) {
      const userCart = state.entities[action.payload.userId].userCart;
      const prodIds = userCart.map((prod) => prod._id);
      const index = prodIds.indexOf(action.payload._id);
      if (userCart[index].count === 1) {
        userCart.splice(index, 1);
      } else {
        userCart[index].count--;
      }
      localStorage.setItem(
        "user",
        JSON.stringify(state.entities[action.payload.userId])
      );
      state.user = state.entities[action.payload.userId];
    },
    logoutUser(state, action) {
      state.ids = [];
      state.entities = {};
      state.user = "";
      state.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("localCart");
    },
    transferCartToOrdered(state, action) {
      const orderedProducts =
        state.entities[action.payload.userId].orderedProducts;
      const orderedIds = orderedProducts.map((prod) => prod._id);
      let userCart = state.entities[action.payload.userId].userCart;
      userCart.map((prod, ind) => {
        if (orderedIds.includes(prod._id)) {
          const index = orderedIds.indexOf(prod._id);
          orderedProducts[index].count += userCart[ind].count;
          return orderedProducts;
        } else {
          orderedProducts.push(prod);
          return orderedProducts;
        }
      });
      state.entities[action.payload.userId].userCart = [];
      state.user = state.entities[action.payload.userId];
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("localCart", JSON.stringify({}));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.entities[action.payload.user._id] = action.payload.user;
      state.ids.push(action.payload.user._id);
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.entities[action.payload.user._id] = action.payload.user;
      state.ids.push(action.payload.user._id);
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      const normalCart = {};
      action.payload.user.userCart.map(
        (product) => (normalCart[product._id] = product)
      );
      localStorage.setItem("localCart", JSON.stringify(normalCart));
    });
  },
});

export const {
  addItemToUserCart,
  removeItemFromUserCart,
  logoutUser,
  transferCartToOrdered,
} = usersSlice.actions;

export default usersSlice.reducer;
