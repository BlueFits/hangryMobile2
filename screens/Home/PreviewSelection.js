import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Controllers
import { DefaultText, HeaderText } from "../../controllers/TextController";
import { overlay } from "../../constants/StyleConstants";

const PreviewSelection = ({ route }) => {
    return (
        <View style={styles.default}>
            <ImageBackground source={{ uri: route.params.image }} style={styles.bgImg}>
                <LinearGradient         
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.textContainer}
                    start={[0, 0.8]}
                >
                    <HeaderText style={{ color: "#fff" }}>{route.params.name}</HeaderText>
                    <DefaultText style={{ color: "#fff" }}>{route.params.shortDescription}</DefaultText>
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