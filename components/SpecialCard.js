import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

//Controllers
import { DefaultText, SmallText, HeaderText } from "../controllers/TextController";

//Constants
import { overlay } from "../constants/StyleConstants";

const SpecialCard = ({ backgroundImage, title, shortDescription, price, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={backgroundImage} style={styles.menuBg}>
                <View style={styles.overlay} />
                <View style={ styles.specialHeader }>
                    <View style={styles.flag}>
                        <SmallText style={{ color: "#fff", }}>Featured Main</SmallText>
                    </View>
                </View>
                <View style={ styles.specialBottom } >
                    <HeaderText style={{ color: "#fff" }}>{title}</HeaderText>
                    <View style={ { flexDirection: "row", justifyContent: "space-between" } }>
                        <DefaultText style={{ color:"#fff" }}>{shortDescription}</DefaultText>
                        <DefaultText style={{ color:"#fff" }}>{price}</DefaultText>
                    </View>
                </View>  
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    overlay,
    menuBg: { 
        borderRadius: 8,
        overflow: "hidden",
        height: 239,
        justifyContent: "space-between",
        alignItems: "center", 
        paddingVertical: 10,
        marginVertical: 7.5,
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

export default SpecialCard;