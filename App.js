import { AntDesign, Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NativeBaseProvider } from "native-base";
import { CartIcon } from "./src/components/cartIcon/CartIcon.component";
// screens
import Cart from "./src/screens/cart/Cart.component";
import Checkout from "./src/screens/checkOut/CheckOut";
import ProductScreen from "./src/screens/product/ProductScreen.component";
import AdminScreen from "./src/screens/admin/AdminScreen.component";
import OnboardingScreen from "./src/screens/onBoarding/OnBoarding.component";
import ProductDetails from "./src/screens/productDetails/ProductDetails.component";
import Payment from "./src/screens/payment/Payment";
import Confirm from "./src/screens/Confirm/Confirm";
import Login from "./src/screens/Login/Login.component";
import Register from "./src/screens/Register/Register.component";

const Tab = createBottomTabNavigator();
const TabHeader = createMaterialTopTabNavigator();
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
              <Stack.Screen name="first" component={OnboardingScreen} />
            )}
            <Stack.Screen name="HomeSection" component={BottomNavigation} />
            <Stack.Screen name="checkout" component={HeaderTabNavigation} />
            <Stack.Screen name="productDetail" component={ProductDetails} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </Provider>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    )
  );
}

// header tab navigator for checkout
const HeaderTabNavigation = () => {
  return (
    <TabHeader.Navigator>
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </TabHeader.Navigator>
  );
};

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
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};
