import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import { DefaultText, SmallText } from "../controllers/TextController";

const RegularCard = ({ onPress, image, title, description, price }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.menuCard}>
                <View style={{ flex: 2 }}>
                    <Image source={image} style={{ height: "100%", width: "100%", borderRadius: "20" }}/>
                </View>
                <View style={styles.menuText}>
                    <DefaultText style={styles.title}>{title}</DefaultText>
                    <SmallText>{description}</SmallText>
                    <DefaultText>{ price ? `$${price}` : "" }</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuCard: {
        marginVertical: 10,
        height: 150,
        width: "100%",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
    },
    menuText: {
        flex: 3,
        paddingLeft: 15, 
        justifyContent: "space-around"
    },
    title: {
        paddingBottom: 10,
        color: '#000'
    }
});

export default RegularCard;