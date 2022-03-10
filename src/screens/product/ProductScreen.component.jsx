import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Header } from "../../components/Header/Header.component";
const data = require("../../constants/product.json");
import { ProductList } from "../../components/productList/ProductList.component";
import { SearchBar } from "../../components/searchbar/SearchBar.component";
import { SearchedProduct } from "../../components/searchProduct/SearchProduct.component";
import { COLORS } from "../../constants/Colors";
const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [focus, setFocus] = useState(false);
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchField.toLowerCase())
  );
  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20 }}
    >
      <Header />
      <SearchBar
        term={searchField}
        onChangeTerm={setSearchField}
        onFocus={openList}
      />
      {focus == false ? (
        <SearchedProduct filteredProduct={filteredProduct} />
      ) : (
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
      )}
    </SafeAreaView>
  );
};

export default ProductScreen;
