import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet,View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { COLORS } from "./src/constants/Colors";
import { store } from "./src/redux/store";
import OnboardingScreen from "./src/screens/onBoarding/OnBoarding.component";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import AdminScreen from "./src/screens/admin/AdminScreen.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CartIcon } from './src/components/cartIcon/CartIcon.component' 
// screens
import Cart from "./src/screens/cart/Cart.component";
import ProductScreen from "./src/screens/product/ProductScreen.component";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(false);
    }

    AsyncStorage.removeItem("isAppFirstLaunched");
  }, []);

 

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && (
              <Stack.Screen
                name="first"
                component={OnboardingScreen}
              />
            )}
          <Stack.Screen name="HomeSection" component={BottomNavigation}/>
          </Stack.Navigator>
         
        </Provider>
      </NavigationContainer>
    )
  );
}




//bottom tab navigator
 const BottomNavigation = () => {
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
      <Tab.Screen name="Home" component={ProductScreen} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="admin" component={AdminScreen} />
      <Tab.Screen name="user" component={AdminScreen} />
    </Tab.Navigator>
  );
};

