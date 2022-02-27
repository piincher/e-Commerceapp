import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { COLORS } from "../../constants/Colors";
import { FONTS } from "../../constants/font";
import { AntDesign } from "@expo/vector-icons";

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
              color: COLORS.Crimson,
            }}
          >
            My Empire By Myma
          </Text>
        </View>
        <AntDesign name="shoppingcart" size={24} color={COLORS.Crimson} />
      </View>

      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <TextInput placeholder="search" style={styles.input} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    fontSize: 16,
    fontWeight: FONTS.Bold,
    color: COLORS.dark,
    flex: 1,
    marginLeft: 10,
  },
});
