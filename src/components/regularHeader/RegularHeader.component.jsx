import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/Colors";

export const RegularHeader = ({ iconRight }) => {
  return (
    <View style={styles.header}>
      <Ionicons
        name="ios-arrow-back"
        size={28}
        color="black"
        onPress={() => navigation.goBack()}
      />
      {iconRight && (
        <AntDesign name={iconRight} size={24} color={COLORS.Orange} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
