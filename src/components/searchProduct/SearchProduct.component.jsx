import React from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";

export const SearchedProduct = ({ filteredProduct }) => {
  return (
    <View>
      {filteredProduct.map((product) => {
        return <List.Item title={product.name} />;
      })}
    </View>
  );
};
