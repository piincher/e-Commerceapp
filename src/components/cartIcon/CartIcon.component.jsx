import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants/Colors";

export const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  return (
    <View
      style={{
        width: 15,
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        top: -4,
        right: -15,
        borderRadius: 10,
        backgroundColor: COLORS.Silver,
      }}
    >
      {cartItems.length > 0 && <Text>{cartItems.length}</Text>}
    </View>
  );
};
