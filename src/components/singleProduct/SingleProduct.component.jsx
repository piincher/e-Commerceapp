import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { COLORS } from "../../constants/Colors";
export const SingleProduct = ({ item, searchScreen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        marginHorizontal: 6,
      }}
      onPress={() =>
        searchScreen && navigation.navigate("productDetail", { item })
      }
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
            uri: item.image
              ? item.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
          style={{ width: 50, height: 40 }}
        />
      </View>

      <Text style={{ marginRight: 90 }}>{item.name}</Text>

      {!searchScreen && <Text>{item.price} fcfa</Text>}
    </TouchableOpacity>
  );
};
