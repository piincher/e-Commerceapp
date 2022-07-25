import React, { useContext, useState, useCallback, useEffect } from "react";
import { View, Text, ScrollView, Button, StyleSheet } from "react-native";
import { Container } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import OrderCard from "../../Shared/OrderCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

// import { logoutUser } from "../../Context/actions/Auth.actions";

const Profile = (props) => {
  let { token, userInfo } = useSelector((state) => state.user);
  console.log("profile page", userInfo.user.id);
  console.log("profile page token", token);
  const [userProfile, setUserProfile] = useState({});
  const [orders, setOrders] = useState();

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

      // axios
      //   .get(`${baseUrl}orders`)
      //   .then((x) => {
      //     const data = x.data;
      //     console.log(data);
      //     const userOrders = data.filter(
      //       (order) => order.user._id === context.stateUser.user.sub
      //     );
      //     setOrders(userOrders);
      //   })
      //   .catch((error) => console.log(error));

      return () => {
        setUserProfile();
        setOrders();
      };
    }, [token])
  );

  // useEffect(() => {
  //   const getProfile = async () => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const response = await axios.get(
  //       `${baseUrl}users/${userInfo.user.id}`,
  //       config
  //     );
  //     console.log("user profile from backend", response.data);
  //   };
  //   getProfile();
  // }, [token]);
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
              setUserProfile({}),

              props.navigation.navigate("Utilisateur"),
              (token = null),
            ]}
          />
        </View>
        <View style={styles.order}>
          <Text style={{ fontSize: 20 }}>My Orders</Text>
          <View>
            {orders ? (
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
  },
});

export default Profile;
