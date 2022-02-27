import React from "react";

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

const width = Dimensions.get("screen").width / 2 - 30;

export const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
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
        </View>
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
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.Crimson,
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
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
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
