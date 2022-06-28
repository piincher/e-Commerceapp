import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { SingleProduct } from "../../components/singleProduct/SingleProduct.component";
import { COLORS } from "../../constants/Colors";
import { clearCart } from "../../redux/reducers/cartItems";
const Cart = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };

  console.log("cart items", cartItems);
  let total = 0;

  cartItems.forEach((cart) => {
    return (total += cart.price);
  });

  const checkoutHandler = () => {
    navigation.navigate("checkout");
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, marginTop: 20 }}
    >
      <Text style={{ textAlign: "center", fontSize: 26 }}>LOGO</Text>
      {cartItems.length > 0 ? (
        cartItems.map((product) => {
          console.log("cart producrt1", product);
          return (
            <View key={product.$oid}>
              <SingleProduct item={product} searchScreen={false} />
            </View>
          );
        })
      ) : (
        <Text style={{ textAlign: "center", fontSize: 24, color: COLORS.red }}>
          cart vide
        </Text>
      )}

      <View style={styles.bottomContainer}>
        <Text style={[styles.textContainer, styles.price]}>
          {total.toFixed(1)} FCFA
        </Text>

        <TouchableOpacity onPress={() => clear()}>
          <Text style={styles.textContainer}>vider</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={cartItems.length === 0}
          onPress={checkoutHandler}
        >
          <Text style={styles.textContainer}>caisse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    //alignContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    elevation: 30,
    margin: 6,
  },
  textContainer: {
    marginHorizontal: 35,
    fontSize: 18,
    color: COLORS.Blue,
  },
  price: {
    color: COLORS.Orange,
  },
});
