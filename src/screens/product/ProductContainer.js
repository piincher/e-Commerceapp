import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, StyleSheet, FlatList } from "react-native";
const data = require("../../constants/product.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ProductContainer;
