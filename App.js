import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import ProductScreen from "./src/screens/product/ProductScreen.component";

import { COLORS } from "./src/constants/Colors";

import { Main } from "./src/navigations/Route";
// screens

export default function App() {
  return (
    <NavigationContainer>
      <Main />
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
