import React from "react";
import { Text, View, Image } from "react-native";

import { COLORS } from "../../constants/Colors";
export const SearchProductItem = ({ product, key }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        marginHorizontal: 6,
      }}
      key={key}
    >
      <View
        style={{
          borderRadius: 20,
          height: 50,
          width: 60,
          borderColor: COLORS.light,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.light,
        }}
      >
        <Image
          source={{
            uri: product.image
              ? product.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
          style={{ width: 50, height: 40 }}
        />
      </View>

      <Text style={{ marginRight: 90 }}>{product.name}</Text>
    </View>
  );
};
