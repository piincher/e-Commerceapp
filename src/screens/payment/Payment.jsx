import React, { useState } from "react";
import { View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Picker,
  Icon,
  Body,
  Title,
} from "native-base";
import { useSelector } from "react-redux";

const methods = [
  { name: "Orange Money", value: "Orange Money" },
  //   { name: "Bank Transfer", value: 2 },
  //   { name: "Card Payment", value: 3 },
];



const Payment = (props) => {
  const [selected, setSelected] = useState("Orange Money");
  const [card, setCard] = useState();
  const { cartItems } = useSelector((state) => state.cartItems);
  const orderItems = props.route.params.order;
  const order = { orderItems, selected };
  return (
    <Container>
      <Header>
        <Body>
          <Title>Choose your payment method</Title>
        </Body>
      </Header>
      <Content>
        {methods.map((item, index) => {
          return (
            <ListItem key={item.name} onPress={() => setSelected(item.value)}>
              <Left>
                <Text>{item.name}</Text>
              </Left>
              <Right>
                <Radio selected={selected == item.value} />
              </Right>
            </ListItem>
          );
        })}
        {/* {selected == 3 ? (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name={"arrow-down"} />}
            headerStyle={{ backgroundColor: "orange" }}
            headerBackButtonTextStyle={{ color: "#fff" }}
            headerTitleStyle={{ color: "#fff" }}
            selectedValue={card}
            onValueChange={(x) => setCard(x)}
          >
            {paymentCards.map((c, index) => {
              return <Picker.Item key={c.name} label={c.name} value={c.name} />;
            })}
          </Picker>
        ) : null} */}
        <View style={{ marginTop: 60, alignSelf: "center" }}>
          <Button
            title={"Confirm"}
            onPress={() =>
              props.navigation.navigate("Confirm", {
                order: order,
              })
            }
          />
        </View>
      </Content>
    </Container>
  );
};

export default Payment;
