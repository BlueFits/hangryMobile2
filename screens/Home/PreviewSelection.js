import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Controllers
import { DefaultText, HeaderText } from "../../controllers/TextController";
import { overlay } from "../../constants/StyleConstants";

const PreviewSelection = () => {
    return (
        <View style={styles.default}>
            <ImageBackground source={require("../../assets/images/pizza.jpg")} style={styles.bgImg}>
                <LinearGradient         
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.textContainer}
                    start={[0, 0.8]}
                >
                    <HeaderText style={{ color: "#fff" }}>Pizza</HeaderText>
                    <DefaultText style={{ color: "#fff" }}>Beautifully crated pizza.</DefaultText>
                </LinearGradient>
            </ImageBackground>
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
    overlay,
    bgImg: { 
        flex: 1, 
        width: "100%", 
        justifyContent: "flex-end"
    },
    textContainer : {
        height: 120,
        justifyContent: "center",
        padding: 20,
    },
});

export default PreviewSelection;