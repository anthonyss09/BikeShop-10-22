import {
  createSlice,
  createEntityAdapter,
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
      console.log(action.payload);
      const id = action.payload._id;
      const price = action.payload.price;
      state.cartCount++;
      let count = 1;
      if (state.ids.includes(id)) {
        state.entities[id].count++;
        count = state.entities[id].count;
      } else {
        cartAdapter.addOne(state, action.payload);
      }
      state.entities[id].total = price * count;
      state.cartSubTotal += price;
      state.tax = state.cartSubTotal * 0.0865;
      state.cartTotal = state.tax + state.cartSubTotal;
      localStorage.setItem("localCart", JSON.stringify(state.entities));
    },
    removeItemFromCart(state, action) {
      const id = action.payload._id;
      const price = action.payload.price;
      const count = state.entities[id].count;
      const index = state.ids.indexOf(id);
      state.cartCount--;
      if (count > 1) {
        state.entities[id].count--;
      } else if (count === 1) {
        state.ids.splice(index, 1);
        delete state.entities[id];
      }
      state.cartSubTotal -= price;
      state.tax = state.cartSubTotal * 0.0865;
      state.cartTotal = state.tax + state.cartSubTotal;
      localStorage.setItem("localCart", JSON.stringify(state.entities));
    },
    clearCart(state, action) {
      state.ids = [];
      state.entities = {};
      state.cartCount = 0;
      state.tax = 0;
      state.cartSubTotal = 0;
      state.cartTotal = 0;
    },
    //coplyLocalToCart called upon login so cart is immediately updated and cart count can be accessed on first landing
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
  displayAlert,
  clearAlert,
  updateItemTotal,
  updateCartTotals,
  addToLocalCart,
  clearCart,
  copyLocalToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
