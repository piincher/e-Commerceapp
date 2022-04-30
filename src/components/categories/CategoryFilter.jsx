import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export const CategoryFilter = ({
  categories,
  active,
  setActive,
  categoriesFilter,
}) => {
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity
        onPress={() => {
          categoriesFilter("all");
          setActive(-1);
        }}
      >
        <Text
          style={active == -1 ? styles.categoryTextSelect : styles.categoryText}
        >
          Tout
        </Text>
      </TouchableOpacity>
      {categories.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              categoriesFilter(item._id.$oid);
              setActive(categories.indexOf(item));
            }}
          >
            <Text
              style={
                active == categories.indexOf(item)
                  ? styles.categoryTextSelect
                  : styles.categoryText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelect: {
    color: COLORS.Orange,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.Orange,
  },
});
