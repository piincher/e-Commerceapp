import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import { Container } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import OrderCard from "../../Shared/OrderCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

import { logout } from "../../redux/reducers/users";

const Profile = (props) => {
  let { token, userInfo } = useSelector((state) => state.user);

  const [userProfile, setUserProfile] = useState({});
  const [orders, setOrders] = useState();
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      if (!token) {
        props.navigation.navigate("Utilisateur");
      }

      AsyncStorage.getItem("token")
        .then((res) => {
          axios
            .get(`${baseUrl}users/${userInfo.user.id}`, {
              headers: { Authorization: `Bearer ${res}` },
            })
            .then((user) => setUserProfile(user.data));
        })
        .catch((error) => console.log(error));

      axios
        .get(`${baseUrl}orders`)
        .then((x) => {
          const data = x.data;
          console.log("data", data);
          const userOrders = data.filter(
            (order) => order.user._id === userInfo.user.id
          );
          setOrders(userOrders);
        })
        .catch((error) => console.log(error));

      return () => {
        setUserProfile();
        setOrders();
      };
    }, [token])
  );

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <Text style={{ fontSize: 30 }}>
          {userProfile ? userProfile.name : ""}
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ margin: 10 }}
            onPress={() => props.navigation.goBack()}
          >
            Email: {userProfile ? userProfile.email : ""}
          </Text>
          <Text style={{ margin: 10 }}>
            Phone: {userProfile ? userProfile.phone : ""}
          </Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <Button
            title={"Sign Out"}
            onPress={() => [
              AsyncStorage.removeItem("token"),
              dispatch(logout()),

              props.navigation.navigate("Utilisateur"),
            ]}
          />
        </View>
        <View style={styles.order}>
          <Text style={{ fontSize: 20 }}>My Orders</Text>
          <View>
            {orders?.length ? (
              orders.map((x) => {
                return <OrderCard key={x.id} {...x} />;
              })
            ) : (
              <View style={styles.order}>
                <Text>You have no orders</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  order: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 60,
    flex: 1,
  },
});

export default Profile;
