import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/Colors";
import { FONTS } from "../../constants/font";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={{ fontSize: 25, fontFamily: FONTS.Regular }}>
          {" "}
          Bienvenue chez{" "}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: FONTS.Regular,
            color: COLORS.Crimson,
          }}
        >
          My Empire By Myma
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
