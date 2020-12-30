import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as firebase from "firebase";
import { EachWordUppercase } from "../../controllers/FormatController";
import HangryBackground from "../../assets/images/HangryBackground.jpg";
import HangryLogo from "../../assets/images/HangryLogo.png";
import user from "../../assets/images/user.jpg";
import { TitleFormat, addressFormat } from "../../controllers/FormatController";
import Svg, { SvgProps, Path } from "react-native-svg";

import {
  DefaultText,
  HeaderText,
  SmallText,
} from "../../controllers/TextController";
import { normalize } from "../../controllers/FontController";

const Profile = () => {
  const currentUser = useSelector((state) => state.authReducer.user);
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  if (!currentUser.email)
    return (
      <View style={styles.fillerStyles}>
        <ImageBackground source={HangryBackground} style={styles.image}>
          <Image source={HangryLogo} style={styles.guestLogo} />

          <View style={styles.guestContainer}>
            <Image
              source={user}
              style={{
                width: "50%",
                height: "50%",
                bottom: "12%",
              }}
            />
            <HeaderText
              style={{
                fontSize: normalize(17),
              }}
            >
              Hangry Guest
            </HeaderText>
          </View>
          <TouchableOpacity style={styles.guestButton} onPress={handleLogout}>
            <HeaderText
              style={{
                color: "#FFF",
                fontSize: normalize(14),
              }}
            >
              Sign Up
            </HeaderText>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );

  if (currentUser.email)
    return (
      <View style={styles.fillerStyles}>
        <ImageBackground source={HangryBackground} style={styles.image}>
          <Image source={HangryLogo} style={styles.logo} />

          <View style={styles.container}>
            <Image
              source={user}
              style={{
                width: "60%",
                height: "50%",
                bottom: "10%",
              }}
            />
            <HeaderText
              style={{
                fontSize: normalize(20),
              }}
            >
              {TitleFormat(currentUser.displayName)}
            </HeaderText>
            <HeaderText
              style={{
                fontSize: normalize(14),
                color: "#808080",
                paddingTop: "4%",
              }}
            >
              {currentUser.photoURL}
            </HeaderText>
            <HeaderText
              style={{
                fontSize: normalize(14),
                color: "#808080",
                paddingTop: "1%",
              }}
            >
              {currentUser.email}
            </HeaderText>
          </View>
          <TouchableOpacity style={styles.logout} onPress={handleLogout}>
            <HeaderText
              style={{
                color: "#FFF",
                fontSize: normalize(14),
              }}
            >
              Log Out
            </HeaderText>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
  fillerStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 10 / 8,
  },
  guestContainer: {
    width: "80%",
    aspectRatio: 10 / 10,
    position: "absolute",
    top: "60%",
    left: "10%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    aspectRatio: 10 / 13,
    position: "absolute",
    top: "60%",
    left: "10%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  guestButton: {
    width: "50%",
    aspectRatio: 10 / 3,
    position: "absolute",
    top: "150%",
    left: "24%",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: "#F26122",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    width: "50%",
    aspectRatio: 10 / 3,
    position: "absolute",
    top: "180%",
    left: "24%",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: "#F26122",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  guestLogo: {
    position: "absolute",
    height: 45,
    width: 205,
    top: "25%",
    left: "25%",
  },
  logo: {
    position: "absolute",
    height: 45,
    width: 205,
    top: "25%",
    left: "25%",
  },
});

export default Profile;
