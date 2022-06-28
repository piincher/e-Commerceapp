import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { Item, Picker, Toast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import FormContainer from "../../components/formContainer/FormContainer";
import Input from "../../components/Input/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegularHeader } from "../../components/regularHeader/RegularHeader.component";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState([]);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState([]);
  const [phone, setPhone] = useState("");

  const { cartItems } = useSelector((state) => state.cartItems);

  useEffect(() => {
    setOrderItems(cartItems);

    props.navigation.navigate("Cart");
    // Toast.show({
    //   topOffset: 60,
    //   type: "error",
    //   text1: "Please Login to Checkout",
    //   text2: "",
    // });

    return () => {
      setOrderItems();
    };
  }, []);

  const checkOut = () => {
    console.log("orders", orderItems);

    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      status: "3",
      // user,
      zip,
    };

    props.navigation.navigate("Payment", { order: order });
  };
  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <RegularHeader iconRight="shoppingcart" navigation={props.navigation} />
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
          placeholder={"City"}
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
          <Button
            title="Confirm"
            onPress={() => checkOut()}
            disabled={
              phone === "" && address === "" && address2 === "" && city === ""
            }
          />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

export default Checkout;
