import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/userAction";
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  token: null, // for storing the JWT
  error: null,
  success: false,
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        token: payload.token,
        userInfo: payload,
        name: payload.name,
      };
    },
  },
});

export default userSlice.reducer;
