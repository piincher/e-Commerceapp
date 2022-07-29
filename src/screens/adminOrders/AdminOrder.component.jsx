import React, { useState, useCallback } from "react";
import { View, FlatList, Text } from "react-native";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";
import { useFocusEffect } from "@react-navigation/native";

import OrderCard from "./helpers/OrderCard.component";
import { COLORS } from "../../constants/Colors";

const Orders = (props) => {
  const [orderList, setOrderList] = useState();

  useFocusEffect(
    useCallback(() => {
      getOrders();
      return () => {
        setOrderList();
      };
    }, [])
  );

  const getOrders = () => {
    axios
      .get(`${baseUrl}orders`)
      .then((x) => {
        setOrderList(x.data);
      })
      .catch((error) => console.log(error));
  };

  console.log("orders", orderList);

  return (
    <View style={{ flex: 1 }}>
      {orderList?.length > 0 ? (
        <FlatList
          data={orderList}
          renderItem={({ item }) => (
            <OrderCard
              navigation={props.navigation}
              {...item}
              editMode={true}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View
          style={{
            backgroundColor: COLORS.white,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
            }}
          >
            😃👀😃Pas de commande
          </Text>
        </View>
      )}
    </View>
  );
};

export default Orders;
