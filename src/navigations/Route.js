import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigation";
import CartNavigator from "./cartNavigation";
import { useSelector } from "react-redux";
import { CartIcon } from "../components/cartIcon/CartIcon.component";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "cart") {
            iconName = "cart";
          } else if (route.name === "admin") {
            iconName = "cog";
          } else if (route.name === "user") {
            iconName = "user";
          }

          // You can return any component that you like here!
          return iconName === "user" ? (
            <AntDesign name="user" size={24} color="black" />
          ) : iconName === "cart" ? (
            <View>
              <CartIcon />
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="cart" component={CartNavigator} />
      <Tab.Screen name="admin" component={HomeNavigator} />
      <Tab.Screen name="user" component={HomeNavigator} />
    </Tab.Navigator>
  );
};
