import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/cart/Cart.component";

const Stack = createStackNavigator();

const Mystack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="checkout" component={Cart} />
    </Stack.Navigator>
  );
};

export default function CartNavigator() {
  return <Mystack />;
}
