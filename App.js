import { StyleSheet, Text, View } from "react-native";
import ProductScreen from "./src/screens/product/ProductScreen.component";
import { COLORS } from "./src/constants/Colors";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { FONTS } from "./src/constants/font";
// screens

export default function App() {
  return <ProductScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
