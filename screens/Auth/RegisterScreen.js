import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/actions/auth";

export default RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        userCredentials.user
          .updateProfile({
            displayname: name,
            phoneNum: phoneNum,
          })
          .then(() => {
            dispatch(authenticate());
          });
        // dispatch(authenticate());
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("../../assets/images/HangryBackground.jpg")}
        style={styles.image}
      >
        <Image
          source={require("../../assets/images/HangryLogo.png")}
          style={styles.logo}
        />
        <View style={styles.container}>
          <Text style={styles.greeting}> {"Sign Up"}</Text>

          <View style={styles.errorMessage}>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}> Full name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(name) => setName(name)}
                value={name}
              ></TextInput>
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}> Phone Number</Text>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
                value={phoneNum}
              ></TextInput>
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}> Email Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(email) => setEmail(email)}
                value={email}
              ></TextInput>
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}> Password </Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize='none'
                onChangeText={(password) => setPassword(password)}
                value={password}
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignUp()}
          >
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 15, marginBottom: 50 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              Already have an account?{" "}
              <Text style={{ fontWeight: "500", color: "#F55E2D" }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: "70%",
    width: "100%",
  },
  logo: {
    width: 205,
    height: 45,
    left: "25%",
    top: "30%",
  },
  container: {
    backgroundColor: "#fff",
    margin: 50,
    marginBottom: 200,
    marginTop: 250,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
  greeting: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: -25,
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#F55E2D",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 25,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginTop: -30,
    marginHorizontal: 50,
    backgroundColor: "#F55E2D",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
