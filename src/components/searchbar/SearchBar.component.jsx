import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/Colors";
import { FONTS } from "../../constants/font";
import { AntDesign } from "@expo/vector-icons";

export const SearchBar = ({ term, onChangeTerm, onBlur, openList, focus }) => {
  return (
    <View style={{ marginTop: 30, flexDirection: "row" }}>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ marginLeft: 20 }}
        />
        <TextInput
          placeholder="search"
          style={styles.input}
          onChangeText={onChangeTerm}
          value={term}
          onPressIn={() => openList()}
        />
        {focus ? (
          <TouchableOpacity onPress={onBlur}>
            <AntDesign
              name="closecircle"
              size={24}
              color="black"
              style={{ marginRight: 4 }}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
