import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";

// import Toast from "react-native-toast-message";
// import axios from "axios";
// import baseURL from "../../../assets/common/baseUrl";

var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  // Add this

  const [productUpdate, setProductUpdate] = useState([]);
  //   useEffect(() => {
  //       if(finalOrder) {
  //         getProducts(finalOrder);
  //       }
  //     return () => {
  //       setProductUpdate();
  //     };
  //   }, [props]);

  // Add this
  //   const getProducts = (x) => {
  //     const order = x.order.order;
  //     var products = [];
  //     if(order) {
  //         order.orderItems.forEach((cart) => {
  //             axios
  //               .get(`${baseURL}products/${cart.product}`)
  //               .then((data) => {
  //                 products.push(data.data);
  //                 setProductUpdate(products);
  //               })
  //               .catch((e) => {
  //                 console.log(e);
  //               });
  //           });
  //     }

  //   };

  //   const confirmOrder = () => {
  //     const order = finalOrder.order.order;
  //     axios
  //       .post(`${baseURL}orders`, order)
  //       .then((res) => {
  //         if (res.status == 200 || res.status == 201) {
  //           Toast.show({
  //             topOffset: 60,
  //             type: "success",
  //             text1: "Order Completed",
  //             text2: "",
  //           });
  //           setTimeout(() => {
  //             props.clearCart();
  //             props.navigation.navigate("Cart");
  //           }, 500);
  //         }
  //       })
  //       .catch((error) => {
  //         Toast.show({
  //           topOffset: 60,
  //           type: "error",
  //           text1: "Something went wrong",
  //           text2: "Please try again",
  //         });
  //       });
  //   };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {props.route.params ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>
              methode de payment : {props.route.params.order.selected}
            </Text>
            {/* <View style={{ padding: 8 }}>
              <Text>Address: {finalOrder.order.order.shippingAddress1}</Text>
              <Text>Address2: {finalOrder.order.order.shippingAddress2}</Text>
              <Text>City: {finalOrder.order.order.city}</Text>
              <Text>Zip Code: {finalOrder.order.order.zip}</Text>
              <Text>Country: {finalOrder.order.order.country}</Text>
            </View> */}
            <Text style={styles.title}>Items:</Text>
            {/* CHANGE THIS */}
            {props.route.params.order.cartItems && (
              <>
                {props.route.params.order.cartItems.map((x) => {
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
          <Button title={"Place order"} onPress={() => console.log("place")} />
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
