import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Header } from "../../components/Header/Header.component";
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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20 }}
    >
      <Header />
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
