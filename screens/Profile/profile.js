import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as firebase from "firebase";

const Profile = () => {
  const currentUser = useSelector((state) => state.authReducer.user);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log("This failed");
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={styles.fillerStyles}>
      {/* Header section */}
      <View style={styles.header}>
        <MaterialCommunityIcons name='account' size={200} color='#fe6a33' />
        <Text style={{ fontSize: 25, paddingTop: 0 }}>{currentUser.email}</Text>
        {/* <Text style={{ fontSize: 18, paddingTop: 7, color: "#808080" }}>
          Location
        </Text> */}
      </View>

      {/* email info */}
      <View style={styles.line}></View>
      {/* <View style={styles.card}>
        <AntDesign style={styles.icon} name='mail' size={35} color='#fe6a33' />
        <Text style={styles.text}>{currentUser.email}</Text>
      </View> */}

      {/* cell info */}
      {/* <View style={styles.line}></View>
      <View style={styles.card}>
        <AntDesign style={styles.icon} name='phone' size={35} color='#fe6a33' />
        <Text style={styles.text}>416-659-4377</Text>
      </View> */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 18 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fillerStyles: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    flexDirection: "column",
  },
  card: {
    textAlign: "left",
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "64%",
    height: 1,
    backgroundColor: "#808080",
  },
  icon: {
    flex: 1,
    paddingLeft: 60,
    alignItems: "flex-start",
  },
  text: {
    flex: 5,
    fontSize: 18,
    alignItems: "center",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#fe6a33",
    borderRadius: 10,
    height: 52,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});

export default Profile;
