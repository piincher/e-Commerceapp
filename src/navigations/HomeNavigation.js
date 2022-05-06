import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/product/ProductScreen.component";
import ProductDetails from "../screens/productDetails/ProductDetails.component";

const Stack = createStackNavigator();

const Mystack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ProductScreen} />
      <Stack.Screen name="productDetail" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <Mystack />;
}
