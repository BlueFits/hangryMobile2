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

export default Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authenticate());
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const guestLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        dispatch(authenticate());
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
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
          <HeaderText style={styles.greeting}> {"Login"}</HeaderText>
          <View style={styles.errorMessage}>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
          </View>
          <View style={styles.form}>
            <View>
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
            <View style={{ marginTop: "10%" }}>
              <DefaultText style={styles.inputTitle}> Password </DefaultText>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize='none'
                onChangeText={(password) => setPasssword(password)}
                value={password}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <HeaderText
                style={{
                  color: "#FFF",
                  fontWeight: "500",
                  fontSize: normalize(12),
                }}
              >
                LOGIN
              </HeaderText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignSelf: "center", marginBottom: "10%" }}
              onPress={() => navigation.navigate("Register")}
            >
              <DefaultText
                style={{ color: "#414959", fontSize: normalize(10) }}
              >
                New to Hangry?{" "}
                <DefaultText style={{ color: "#F55E2D" }}>Sign Up</DefaultText>
              </DefaultText>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.guestButton} onPress={guestLogin}>
            <HeaderText
              style={{
                color: "#FFF",
                fontSize: normalize(12),
              }}
            >
              CONTINUE AS GUEST
            </HeaderText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: "20%",
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
    margin: "10%",
    marginBottom: "20%",
    marginTop: "70%",
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
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
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
    height: 30,
    fontSize: normalize(8),
    color: "#161F3D",
  },
  button: {
    marginTop: 30,
    marginHorizontal: 50,
    top: "45%",
    backgroundColor: "#F55E2D",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  guestButton: {
    marginTop: 30,
    marginHorizontal: 40,
    top: "5%",
    backgroundColor: "#F55E2D",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
