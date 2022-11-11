import {
  createSlice,
  createEntityAdapter,
  current,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import {
  localCart,
  localCartCount,
  localCartSubTotal,
} from "../../utils/cartValues";

const cartAdapter = createEntityAdapter({
  selectId: (product) => product._id,
});

const initialState = cartAdapter.getInitialState({
  ids: localCart ? Object.keys(localCart) : [],
  entities: localCart,
  cartCount: localCartCount ? localCartCount : 0,
  cartSubTotal: localCartSubTotal ? localCartSubTotal : 0,
  tax: localCartSubTotal ? localCartSubTotal * 0.0865 : 0,
  cartTotal: localCartSubTotal
    ? localCartSubTotal + localCartSubTotal * 0.0865
    : 0,
});

export const createCheckoutSession = createAsyncThunk(
  "/cart/create-checkout-session",
  async ({ cartTotal }) => {
    try {
      const response = await axios.post(
        "/api/products/create-checkout-session",
        {
          cartTotal,
        }
      );

      window.location.href = response.data.sessionUrl;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const draft = current(state);
      const id = action.payload._id;
      state.cartCount++;
      if (draft.ids.includes(id)) {
        state.entities[id].count++;
      } else {
        cartAdapter.addOne(state, action.payload);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload._id;
      const price = state.entities[id].price;
      const count = state.entities[id].count;
      const index = state.ids.indexOf(id);
      if (count > 1) {
        state.entities[id].count--;
        state.cartCount--;
      } else if (count === 1) {
        state.ids.splice(index, 1);
        delete state.entities[id];
        state.cartSubTotal -= price;
        state.tax = state.cartSubTotal * 0.0865;
        state.cartTotal = state.tax + state.cartSubTotal;
        state.cartCount--;
        localStorage.setItem("localCart", JSON.stringify(state.entities));
      }
    },
    updateItemTotal(state, action) {
      const id = action.payload._id;
      const draft = current(state);
      const price = draft.entities[id].price;
      const count = draft.entities[id].count;
      state.entities[id].total = price * count;
    },
    updateCartTotals(state, action) {
      const price = action.payload.price;
      state.cartSubTotal += price;
      state.tax = state.cartSubTotal * 0.0865;
      state.cartTotal = state.tax + state.cartSubTotal;
    },
    addToLocalCart(state, action) {
      const localCart = JSON.parse(localStorage.getItem("localCart")) || {};
      const ids = Object.keys(localCart);
      if (ids.includes(action.payload._id)) {
        //update state, set local storage with udpated state value
        localCart[action.payload._id].count++;
        localStorage.setItem("localCart", JSON.stringify(localCart));

        return;
      }
      localCart[action.payload._id] = action.payload;
      localStorage.setItem("localCart", JSON.stringify(localCart));
    },
    //coplyLocalToCart is neccessary upon login, will be called so cart is immediately updated and cart count can be accessed upon landing
    clearCart(state, action) {
      state.ids = [];
      state.entities = {};
      state.cartCount = 0;
      state.tax = 0;
      state.cartSubTotal = 0;
      state.cartTotal = 0;
    },
    copyLocalToCart(state, action) {
      const ids = Object.keys(action.payload);
      const products = Object.values(action.payload);
      let cartCount;
      let cartSubTotal;
      if (products.length > 1) {
        cartCount = products.reduce((a, b) => a + b.count, 0);
        cartSubTotal = products.reduce((a, b) => a + b.count * b.price, 0);
      } else {
        cartCount = products[0].count;
        cartSubTotal = products[0].count * products[0].price;
      }

      state.ids = ids;
      state.entities = action.payload;
      state.cartCount = cartCount;
      state.cartSubTotal = cartSubTotal;
      state.tax = cartSubTotal * 0.0865;
      state.cartTotal = cartSubTotal * 0.0865 + cartSubTotal;
    },
  },
});
export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
} = cartAdapter.getSelectors((state) => state.cart);

export const {
  addItemToCart,
  removeItemFromCart,
  decrementItem,
  incrementItem,
  updateItemTotal,
  updateCartTotals,
  addToLocalCart,
  clearCart,
  copyLocalToCart,
} = cartSlice.actions;
export default cartSlice.reducer;