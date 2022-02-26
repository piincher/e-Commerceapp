import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ProductCard } from "../productCard/ProductCard.component";

const { width } = Dimensions.get("window");
export const ProductList = ({ item, key }) => {
  return (
    <>
      <ProductCard {...item} />
    </>
  );
};
