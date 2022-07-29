import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS } from "../../constants/Colors";

export const CategoryFilter = ({
  categories,
  active,
  setActive,
  categoriesFilter,
}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
              categoriesFilter(item.id);
              setActive(categories.indexOf(item));
            }}
            key={item.id}
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
    </ScrollView>
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
    marginHorizontal: 12,
  },
  categoryTextSelect: {
    color: COLORS.Orange,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.Orange,
  },
});
