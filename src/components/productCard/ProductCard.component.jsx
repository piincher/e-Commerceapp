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
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={{ height: 100, alignItems: "center" }}>
          <Image style={{ flex: 1, resizeMode: "contain" }} />
        </View>
        <Text style={{ fontWeight: FONTS.Bold, fontSize: 17 }}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text>{price} FCFA</Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.green,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 22,
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
