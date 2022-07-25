import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = createAsyncThunk(
  "user",
  async ({ email, password }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("emai", email, password);
      const response = await axios.post(
        `${baseUrl}users/login`,
        {
          email,
          password,
        },
        config
      ); //where you want to fetch data
      AsyncStorage.setItem("token", response.data.token);
      console.log("data from backend", response.data);
      return await response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
