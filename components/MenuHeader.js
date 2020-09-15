import React from "react";
import { View, StyleSheet, ImageBackground, Button, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons'; 

//Components
import Touchable from "../components/Touchable"

//Controllers
import { DefaultText, HeaderText, SmallText } from "../controllers/TextController";

//Consants
import { overlay } from "../constants/StyleConstants";
import Colors from "../constants/Colors";

const MenuHeader = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require("../assets/images/Mae.jpeg")} style={{ width: "100%", height: "100%" }}>
                            <View style={styles.overlay} />
                            <View style={styles.headerTop}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                                    <AntDesign name="close" size={24} color="white" />  
                                </TouchableWithoutFeedback>
                                <TouchableOpacity style={styles.followBttn}>
                                    <View style={styles.followElemContainer}>
                                        <AntDesign name="instagram" size={24} color="white" />
                                        <DefaultText style={{ color: "#fff" }}>Follow</DefaultText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container}>
                                <HeaderText style={styles.text}>Pizza</HeaderText>
                                <View style={styles.middleTextContainer}>
                                    <SmallText style={styles.text}>15 Steeles Ave. E, M154G7, Toronto ON</SmallText>
                                    <SmallText style={styles.text}>4.4 <Entypo name="star" size={16} color="white" /> 50 reviews</SmallText>
                                </View>  
                                <Button title="Check-In!" color={Colors.primary}/>
                            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: 215,
    },
    container: { 
        flex: 1, 
        alignItems: "center",
    },
    overlay,
    headerContainer: { 
        alignItems: "center" 
    },
    text: {
        color: "#fff",
    },
    middleTextContainer: { 
        alignItems: "center", 
        marginVertical: 10 
    },
    headerTop: { 
        width: "100%",
        paddingTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    followBttn: { 
        height: 30, 
        width: 120,
        borderRadius: 20,
        borderWidth: 1, 
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    followElemContainer: { 
        flexDirection: "row", 
        width: "65%", 
        justifyContent: "space-between" 
    },
});

export default MenuHeader;