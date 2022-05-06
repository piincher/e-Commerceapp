import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import { COLORS } from "./src/constants/Colors";

import { Main } from "./src/navigations/Route";
import { store } from "./src/redux/store";

import { Provider } from "react-redux";
// screens

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
