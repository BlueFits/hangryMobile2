import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DefaultText, SmallText } from "../controllers/TextController";

const RegularCard = ({ onPress, image, title, description, price }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.menuCard}>
                <View style={{ flex: 2 }}>
                    <Image source={image} style={{ height: "100%", width: "100%" }}/>
                </View>
                <View style={styles.menuText}>
                    <DefaultText>{title}</DefaultText>
                    <SmallText>{description}</SmallText>
                    <DefaultText>{ price ? `$${price}` : "" }</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuCard: {
        marginVertical: 7.5,
        height: 150,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    menuText: {
        flex: 3,
        paddingLeft: 15, 
        justifyContent: "space-around"
    },
});

export default RegularCard;