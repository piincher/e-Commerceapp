import { StyleSheet, Text, View } from "react-native";
import ProductScreen from "./src/screens/product/ProductScreen.component";
import { COLORS } from "./src/constants/Colors";
// screens

export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
    </View>
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
