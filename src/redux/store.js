import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./reducers/cartItems";
import userSlice from "./reducers/users";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice,
    user: userSlice,
  },
});
