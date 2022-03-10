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
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(FONTS),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: "#41669E1",
    accent: "#f1c40f",
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ProductScreen />
    </PaperProvider>
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
