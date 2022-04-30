import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductScreen from "../screens/product/ProductScreen.component";

const Stack = createStackNavigator();

const Mystack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function HomeNavigator() {
  return <Mystack />;
}
