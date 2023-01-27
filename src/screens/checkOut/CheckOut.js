import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

import Toast from "react-native-toast-message";
import FormContainer from "../../components/formContainer/FormContainer";
import Input from "../../components/Input/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegularHeader } from "../../components/regularHeader/RegularHeader.component";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  let { token, userInfo } = useSelector((state) => state.user);
  console.log("token", token);
  const [orderItems, setOrderItems] = useState([]);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const user = userInfo.user;
  const [phone, setPhone] = useState("");

  const { cartItems } = useSelector((state) => state.cartItems);
  console.log("cart", cartItems);
  useEffect(() => {
    setOrderItems(cartItems);
    if (token === null) {
      props.navigation.navigate("cartScreen");
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "S'il vous plait connectez-vous avant de continuer ",
      });

      return;
    }

    return () => {
      setOrderItems([]);
    };
  }, [token]);

  const checkOut = () => {
    console.log("orders", orderItems);
    if (phone === "" || phone.length > 8) {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "le numero ne doit pas depasser 8 chiffre",
      });
      return;
    }
    if (phone === "" || phone.length < 8) {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "le numero ne doit pas etre moins de 8 chiffre",
      });
      return;
    }

    if (address === "" || address2 === "" || city === "") {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "remplir😊toutes les champs",
      });
      return;
    }

    let order = {
      city,

      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      status: "3",
      user,
    };

    props.navigation.navigate("Payment", { order: order });
  };
  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <RegularHeader iconRight='shoppingcart' navigation={props.navigation} />
      <FormContainer title={"Shipping Address"}>
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"ShippingAddress2"}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={"quartier"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />

        {/* <Item picker>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" color={"#007aff"} />}
                style={{ width: undefined }}
                selectedValue={country}
                placeholder="Select your country"
                placeholderStyle={{ color: '#007aff' }}
                placeholderIconColor="#007aff"
                onValueChange={(e) => setCountry(e)}
            >
                {countries.map((c) => {
                    return <Picker.Item 
                            key={c.code} 
                            label={c.name}
                            value={c.name}
                            />
                })}
            </Picker>
        </Item> */}
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title='Confirm' onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

export default Checkout;
