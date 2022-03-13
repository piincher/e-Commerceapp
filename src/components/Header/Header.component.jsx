import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { COLORS } from "../../constants/Colors";
import { FONTS } from "../../constants/font";
import { AntDesign } from "@expo/vector-icons";
import { SearchBar } from "../searchbar/SearchBar.component";

export const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: FONTS.Bold }}>
            {" "}
            Bienvenue chez{" "}
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: FONTS.Bold || "500",
              color: COLORS.Orange,
            }}
          >
            My Empire By Myma
          </Text>
        </View>
        <AntDesign name="shoppingcart" size={24} color={COLORS.Orange} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
