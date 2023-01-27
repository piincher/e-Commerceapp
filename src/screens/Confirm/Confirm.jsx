import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
// import axios from "axios";
// import baseURL from "../../../assets/common/baseUrl";
import { clearCart } from "../../redux/reducers/cartItems";
import { CommonActions } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  // Add this

  const dispatch = useDispatch();
  const finalOrder = props.route.params;
  console.log("params order", finalOrder.order.orderItems);

  let total = 0;

  finalOrder.order.orderItems.orderItems.forEach((cart) => {
    return (total += cart.price);
  });
  console.log(total);

  const [productUpdate, setProductUpdate] = useState([]);
  useEffect(() => {
    if (finalOrder) {
      getProducts(finalOrder);
    }
    return () => {
      setProductUpdate();
    };
  }, [props]);

  const getProducts = (x) => {
    console.log("x product", x.order.orderItems.orderItems);
    const order = x.order.orderItems;
    const products = [];
    if (order) {
      order.orderItems.forEach((cart) => {
        axios
          .get(`${baseUrl}products/${cart.id}`)
          .then((data) => {
            console.log("response", data.data);
            products.push(data.data);
            setProductUpdate(products);
          })
          .catch((e) => {
            console.log(e);
          });
      });
    }
  };

  // add multiple items in the cart

  const confirmOrder = () => {
    const order = finalOrder.order;
    console.log("click", order);
    axios
      .post(`${baseUrl}orders`, { order, total })
      .then((res) => {
        console.log("order response", res.data);
        if (res.status == 200 || res.status == 201) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Order Completedd",
            text2: " wow",
          });
          setTimeout(() => {
            dispatch(clearCart());
            props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: "Accueil" }],
              })
            );
          }, 500);
        }
      })
      .catch((error) => {
        console.log("error", error);
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again",
        });
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {props.route.params ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>
              methode de payment : {props.route.params.order.selected}
            </Text>
            <View style={{ padding: 8 }}>
              <Text>
                Address: {finalOrder.order.orderItems.shippingAddress1}
              </Text>
              <Text>
                Address2: {finalOrder.order.orderItems.shippingAddress2}
              </Text>
              <Text>phone: {finalOrder.order.orderItems.phone}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {/* CHANGE THIS */}
            {finalOrder.order.orderItems.orderItems && (
              <>
                {finalOrder.order.orderItems.orderItems.map((x) => {
                  return (
                    <ListItem style={styles.listItem} key={x.name} avatar>
                      <Left>
                        <Thumbnail source={{ uri: x.image }} />
                      </Left>
                      <Body style={styles.body}>
                        <Left>
                          <Text>{x.name}</Text>
                        </Left>
                        <Right>
                          <Text>$ {x.price}</Text>
                        </Right>
                      </Body>
                    </ListItem>
                  );
                })}
              </>
            )}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"Place order"} onPress={() => confirmOrder()} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Confirm;
