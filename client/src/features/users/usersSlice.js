import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";

import axios from "axios";

const usersAdapter = createEntityAdapter();

const currentUser = JSON.parse(localStorage.getItem("user")) || null;
const userId = currentUser ? currentUser._id : null;

const initialState = usersAdapter.getInitialState({
  ids: currentUser ? [currentUser._id] : [],
  entities: currentUser ? { [userId]: { currentUser } } : {},
  token: localStorage.getItem("token") || null,
  user: currentUser ? currentUser : null,
});

export const registerUser = createAsyncThunk(
  "users/register",
  async ({ firstName, lastName, email, password }) => {
    try {
      const user = await axios.post("/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      localStorage.setItem("token", user.data.token);
      localStorage.setItem("user", JSON.stringify(user.data.user));
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    try {
      const user = await axios.post("/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("user", JSON.stringify(user.data.user));
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//update user for both adding and removing items from user cart in db
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userId, update }) => {
    const response = await axios.patch("/api/auth/updateUserCart", {
      userId,
      update,
    });
    return response.data.updatedUser;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logoutUser(state, action) {
      state.ids = [];
      state.entities = {};
      state.user = "";
      state.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("localCart");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.entities[action.payload.user._id] = action.payload.user;
      state.ids.push(action.payload.user._id);
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.entities[action.payload.user._id] = action.payload.user;
      state.ids.push(action.payload.user._id);
      state.user = action.payload.user;
      state.token = action.payload.token;
      const normalCart = {};
      action.payload.user.userCart.map(
        (product) => (normalCart[product._id] = product)
      );
      localStorage.setItem("localCart", JSON.stringify(normalCart));
    });
  },
});

export const { logoutUser } = usersSlice.actions;

export default usersSlice.reducer;