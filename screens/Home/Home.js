import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Constants
import { overlay } from "../../constants/StyleConstants";

//CONTROLLERS
import { HeaderText } from "../../controllers/TextController";

//COMPONENTS
import Touchable from "../../components/Touchable";

const Home = ({ navigation }) => {

    const [search, setSearch] = useState("");

    return (
        <TouchableWithoutFeedback touchSoundDisabled={true} onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <View style={styles.searchContainer}>
                    <Ionicons name="ios-search" size={24} color="black" />
                    <TextInput
                        style={styles.input}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        placeholder={"Search restaurant or dish"}
                        placeholderTextColor={"#4D4D4D"}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("SubMenu")} style={styles.mealColoumn}>
                    <View>
                        <ImageBackground source={require("../../assets/images/pizza.jpg")} style={styles.menuBg}>
                            <View style={styles.overlay} />
                            <View>
                                <HeaderText style={{ color: "#fff" }}>Pizza</HeaderText>
                            </View>  
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        paddingHorizontal: 15,
        flex: 1,
    },
    searchContainer: {
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderRadius: 20,
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: "#EBEBEB",
    },  
    input: {
        paddingHorizontal: 5,
        width: "80%",
    },
    overlay,
    mealColoumn: {
        height: 200,
        width: "100%",
    },
    menuBg: { 
        width: "100%", 
        height: "100%",
        justifyContent: "center",
        alignItems: "center", 
    },
});

export default Home;