import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { SingleProduct } from "../../components/singleProduct/SingleProduct.component";
import { COLORS } from "../../constants/Colors";
import { Images } from "../../constants/icon";
import { clearCart } from "../../redux/reducers/cartItems";
const Cart = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };

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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={Images.logo}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
      {cartItems.length > 0 ? (
        cartItems.map((product) => {
          console.log("product loop", product);

          return (
            <View key={product.id}>
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
          <Text
            style={cartItems.length > 0 ? styles.textContainer : styles.disable}
          >
            caisse
          </Text>
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
    color: COLORS.Crimson,
  },
  price: {
    color: COLORS.Orange,
  },
  disable: {
    marginHorizontal: 35,
    fontSize: 18,
    color: COLORS.Silver,
  },
});
