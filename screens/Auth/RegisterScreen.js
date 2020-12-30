import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/actions/auth";
import {
  DefaultText,
  HeaderText,
  SmallText,
} from "../../controllers/TextController";
import { normalize } from "../../controllers/FontController";

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
    <ScrollView style={styles.main}>
      <ImageBackground
        source={require("../../assets/images/HangryBackground.jpg")}
        style={styles.image}
      >
        <Image
          source={require("../../assets/images/HangryLogo.png")}
          style={styles.logo}
        />
        <View style={styles.container}>
          <HeaderText style={styles.greeting}> {"Sign Up"}</HeaderText>

          <View style={styles.errorMessage}>
            {errorMessage && (
              <DefaultText style={styles.error}>{errorMessage}</DefaultText>
            )}
          </View>
          <View style={styles.form}>
            <View>
              <DefaultText style={styles.inputTitle}> Full name</DefaultText>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(name) => setName(name)}
                value={name}
              ></TextInput>
            </View>
            <View style={{ marginTop: "15%" }}>
              <DefaultText style={styles.inputTitle}> Phone Number</DefaultText>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
                value={phoneNum}
              ></TextInput>
            </View>
            <View style={{ marginTop: "15%" }}>
              <DefaultText style={styles.inputTitle}>
                {" "}
                Email Address
              </DefaultText>
              <TextInput
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(email) => setEmail(email)}
                value={email}
              ></TextInput>
            </View>
            <View style={{ marginTop: "15%" }}>
              <DefaultText style={styles.inputTitle}> Password </DefaultText>
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
            <HeaderText style={{ color: "#FFF", fontSize: normalize(12) }}>
              SIGN UP
            </HeaderText>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginBottom: "30%" }}
            onPress={() => navigation.navigate("Login")}
          >
            <DefaultText style={{ color: "#414959", fontSize: normalize(10) }}>
              Already have an account?{" "}
              <DefaultText style={{ fontWeight: "500", color: "#F55E2D" }}>
                Login
              </DefaultText>
            </DefaultText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: "45%",
          }}
        ></View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: "60%",
    width: "100%",
  },
  logo: {
    width: normalize(170),
    height: normalize(35),
    left: "25%",
    top: "20%",
  },
  container: {
    backgroundColor: "#fff",
    margin: "10%",
    marginBottom: "20%",
    marginTop: "40%",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.3,
  },
  greeting: {
    marginTop: "8%",
    fontSize: normalize(16),
    textAlign: "center",
    marginBottom: "-10%",
  },
  errorMessage: {
    height: "18%",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "#E9446A",
    fontSize: normalize(10),
    textAlign: "center",
  },
  form: {
    marginBottom: "20%",
    marginHorizontal: "10%",
  },
  inputTitle: {
    color: "#F55E2D",
    fontSize: normalize(8),
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: normalize(20),
    fontSize: normalize(10),
    color: "#161F3D",
  },
  button: {
    position: "absolute",
    top: "96%",
    left: "10%",
    marginHorizontal: normalize(30),
    backgroundColor: "#F55E2D",
    borderRadius: 25,
    height: normalize(30),
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
});
