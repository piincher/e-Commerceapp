import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Banner } from "../../components/Banner/Banner.component";
import { CategoryFilter } from "../../components/categories/CategoryFilter";
import { Header } from "../../components/Header/Header.component";
import { ProductList } from "../../components/productList/ProductList.component";
import { SearchBar } from "../../components/searchbar/SearchBar.component";
import { SearchedProduct } from "../../components/searchProduct/SearchProduct.component";
import { COLORS } from "../../constants/Colors";
import { baseUrl } from "../../constants/baseUrl";
import axios from "axios";
const data = require("../../constants/product.json");
const categoriesData = require("../../constants/categories.json");

const { height } = Dimensions.get("window");
const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [focus, setFocus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productCtg, setProductCtg] = useState([]);

  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${baseUrl}products`);
      console.log("res", res.data);
      setProducts(res.data);
      setCategories(res.data);
      setProductCtg(res.data);
      setActive(-1);
      setInitialState(res.data);
    };

    getData();
    return () => {
      setProducts([]);
      setCategories([]);
      setFocus(false);
      setActive();
      setInitialState([]);
    };
  }, []);

  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const changeCategory = (ctg) => {
    {
      ctg === "all"
        ? [setProductCtg(initialState), setActive(true)]
        : [
            setProductCtg(
              products.filter((i) => i.category.$oid === ctg),
              setActive(true)
            ),
          ];
    }
  };
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20 }}
    >
      <Header />
      <SearchBar
        term={searchField}
        onChangeTerm={setSearchField}
        onFocus={openList}
        onBlur={onBlur}
        openList={openList}
        focus={focus}
      />
      {focus === true ? (
        <SearchedProduct filteredProduct={filteredProduct} />
      ) : (
        <>
          <>
            <Banner />
            <CategoryFilter
              categories={categories}
              categoriesFilter={changeCategory}
              productCtg={productCtg}
              active={active}
              setActive={setActive}
            />
          </>

          {productCtg.length > 0 ? (
            <View style={styles.listContainer}>
              {productCtg.map((item) => {
                return (
                  <React.Fragment key={item._id.$oid}>
                    <ProductList item={item} />
                  </React.Fragment>
                );
              })}
              {/* <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  marginTop: 10,
                  paddingBottom: 50,
                }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={productCtg}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                  return <ProductList item={item} key={item.id} />;
                }}
              /> */}
            </View>
          ) : (
            <View style={[styles.center]}>
              <Text style={styles.textContainer}>pas de produit</Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  textContainer: {
    textAlign: "center",
    fontSize: 24,
    color: "red",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
