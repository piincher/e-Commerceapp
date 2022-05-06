import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./reducers/cartItems";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice,
  },
});
