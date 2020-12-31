import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";

import { HeaderText } from "../controllers/TextController";

//Images
import background from "../assets/images/HangryBackground.jpg";
import logo from "../assets/images/HangryLogo.png";

const HangryStaticHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <ImageBackground style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} source={background}>
                <View>
                    <Image source={logo} style={{ height: 25 }} resizeMode="contain" />
                </View>  
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
    },
});

export default HangryStaticHeader;