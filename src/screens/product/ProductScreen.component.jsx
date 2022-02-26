import React, { useState, useEffect } from "react";
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const data = require("../../constants/product.json");
import { ProductList } from "../../components/productList/ProductList.component";
import { COLORS } from "../../constants/Colors";
const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return <ProductList item={item} key={item.id} />;
        }}
      />
    </SafeAreaView>
  );
};

export default ProductScreen;
