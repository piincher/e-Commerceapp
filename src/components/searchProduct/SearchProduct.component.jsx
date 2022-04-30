import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../constants/Colors";

import { SearchProductItem } from "../searchProductItem/SearchProductItem.component";

export const SearchedProduct = ({ filteredProduct }) => {
  return (
    <View>
      {filteredProduct.length > 0 ? (
        filteredProduct.map((product) => {
          return (
            <View key={product._id}>
              <SearchProductItem product={product} />
            </View>
          );
        })
      ) : (
        <Text style={{ textAlign: "center", fontSize: 24, color: COLORS.red }}>
          desole nous n'avons pas cet produit
        </Text>
      )}
    </View>
  );
};
