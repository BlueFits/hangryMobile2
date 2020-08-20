import React from "react";
import { View, StyleSheet } from "react-native";

//CONTROLLERS
import { DefaultText } from "../controllers/TextController";

const Home = () => {
    return (
        <View style={styles.default}>
            <DefaultText>Home Screen</DefaultText>
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
});

export default Home;