import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { FontAwesome } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigation";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Settings" component={HomeNavigator} />
      <Tab.Screen name="admin" component={HomeNavigator} />
      <Tab.Screen name="user" component={HomeNavigator} />
    </Tab.Navigator>
  );
};
