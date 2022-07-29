import React from "react";
import Toast from "react-native-toast-message";
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/Colors";
import { FONTS } from "../../constants/font";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../redux/reducers/cartItems";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
const width = Dimensions.get("screen").width / 2 - 30;

export const ProductCard = (props) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const { name, price, image, countInStock } = props;

  const item = { name, price, image, countInStock };

  const addTocart = async () => {
    // dispatch(addtoCart(product));
    // let cart = [];
    // cart.push({
    //   ...item,
    //   count: 1,
    // });
    // let unique = _.uniqWith(cart, _.isEqual);
    // await AsyncStorage.setItem("cart", JSON.stringify(unique));
  };

  return (
    <View activeOpacity={0.5}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("productDetail", { item })}
        >
          <Image
            resizeMode="contain"
            style={{ flex: 1, height: 100, width: 100 }}
            source={{
              uri: image
                ? image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: FONTS.Bold, fontSize: 16, marginTop: 10 }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: FONTS.Bold }}>
            {price} FCFA
          </Text>
          <TouchableOpacity
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.Orange,
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              dispatch(addtoCart(item));
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: `${name}ajouté au panier`,
                text2: "Accédez à votre panier pour finaliser la commande",
              });
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.white,
                fontWeight: FONTS.Bold,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 225,
    backgroundColor: COLORS.Silver,
    width,
    marginHorizontal: 4,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
