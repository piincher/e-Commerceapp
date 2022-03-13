import React from "react";
import { View } from "react-native";
import { List, Text } from "react-native-paper";
import { SearchProductItem } from "../searchProductItem/SearchProductItem.component";

export const SearchedProduct = ({ filteredProduct }) => {
  return (
    <View>
      {filteredProduct.length > 0 ? (
        filteredProduct.map((product) => {
          return (
            <View key={product.id}>
              <SearchProductItem product={product} />
            </View>
          );
        })
      ) : (
        <Text>desole nous avons pas cet produit</Text>
      )}
    </View>
  );
};
