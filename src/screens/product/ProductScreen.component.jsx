import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  FlatList,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
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
import { Container } from "native-base";

const { height } = Dimensions.get("window");
const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [focus, setFocus] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productCtg, setProductCtg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const filteredProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      const getProducts = async () => {
        setLoading(true);
        const res = await axios.get(`${baseUrl}products`);
        console.log("res", res.data);
        setProducts(res.data);
        setProductCtg(res.data);
        setActive(-1);
        setInitialState(res.data);
        setLoading(false);
      };

      const getCategories = async () => {
        const res = await axios.get(`${baseUrl}categories`);
        console.log("categories", res.data);
        setCategories(res.data);
      };
      if (isMounted) {
        getProducts();
        getCategories();
      }

      return () => {
        setProducts([]);
        setCategories([]);
        setFocus(false);
        setActive();
        setInitialState([]);
        isMounted = false;
      };
    }, [])
  );

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
              products.filter((i) => i.category.id === ctg),
              setActive(true)
            ),
          ];
    }
  };
  return (
    <>
      {loading ? (
        <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
          <ActivityIndicator size="large" color="red" />
        </Container>
      ) : (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            paddingHorizontal: 20,
          }}
        >
          {/* <Header /> */}
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
                      <React.Fragment key={item.id}>
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
      )}
    </>
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
