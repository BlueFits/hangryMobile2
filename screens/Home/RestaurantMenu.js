import React from "react";
import {View, StyleSheet, ImageBackground} from "react-native";

//Controllers
import { DefaultText, HeaderText, SmallText } from "../../controllers/TextController";

//Constants
import { overlay } from "../../constants/StyleConstants";

const RestaurantMenu = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require("../../assets/images/deserts.jpeg")} style={styles.menuBg}>
                <View style={styles.overlay} />
                <View style={ styles.specialHeader }>
                    <View style={styles.flag}>
                        <SmallText style={{ color: "#fff", }}>Featured Main</SmallText>
                    </View>
                </View>
                <View style={ styles.specialBottom } >
                    <HeaderText style={{ color: "#fff" }}>Pizza</HeaderText>
                    <View style={ { flexDirection: "row", justifyContent: "space-between" } }>
                        <DefaultText style={{ color:"#fff" }}>Delicious cream filled pastry.</DefaultText>
                        <DefaultText style={{ color:"#fff" }}>$12.99</DefaultText>
                    </View>
                </View>  
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay,
    screen: {
        padding: 15,
    },
    menuBg: { 
        borderRadius: 8,
        overflow: "hidden",
        height: 239,
        justifyContent: "space-between",
        alignItems: "center", 
        paddingVertical: 10,
    },
    flag: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#20649C",
        padding: 3,
    },
    specialHeader: {
        width: "100%",
    },
    specialBottom: {
        width: "100%",
        paddingHorizontal: 15,
    },
});

export default RestaurantMenu;