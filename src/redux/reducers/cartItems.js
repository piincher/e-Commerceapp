import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
const initialState = {
  cartItems: [],
};
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    addtoCart: (state, { payload }) => {
      const { $oid } = payload;
      state.cartItems.push({ ...payload, count: 1 });
      let unique = _.uniqWith(state.cartItems, _.isEqual);
      state.cartItems = unique;

      console.log("cart with loadash", state.cartItems);

      // state.cartItems.push(payload);
      // let unique = _.uniqWith(state.cartItems, _.isEqual);
      // state.cartItems = unique;
      // console.log("cart with loadash", state.cartItems);
    },
    removeFromCart: (state, { payload }) => {
      return state.cartItems.filter((cartItem) => cartItem !== payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addtoCart, removeFromCart, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
