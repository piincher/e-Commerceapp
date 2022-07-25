import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Error from "../../components/Error/Error.component";
import FormContainer from "../../components/formContainer/FormContainer";
import Input from "../../components/Input/Input";
import EasyButton from "../../components/MymaButton/MymaButton.component";
import { loginUser } from "../../redux/actions/userAction";
import Toast from "react-native-toast-message";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector((state) => state.user);
  console.log("state", userInfo);
  console.log("token ", token);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("token async", token);
    };
    getToken();
    if (token) {
      props.navigation.navigate("profile");
    }
  }, [token]);

  const handleSubmit = () => {
    console.log("click");
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
      return;
    } else {
      dispatch(loginUser(user));
      Toast.show({
        topOffset: 60,
        type: "success",
        text1: `connecte`,
        text2: "Accédez à votre panier pour finaliser la commande",
      });
    }
  };
  return (
    <FormContainer title={"Login"}>
      <Input
        placeholder={"Enter Email"}
        name={"email"}
        id={"email"}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={"Enter Password"}
        name={"password"}
        id={"password"}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <EasyButton large primary onPress={() => handleSubmit()}>
          <Text style={{ color: "white" }}>Login</Text>
        </EasyButton>
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
        <EasyButton
          large
          secondary
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={{ color: "white" }}>Register</Text>
        </EasyButton>
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default Login;
