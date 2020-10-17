import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

//Constants
import { overlay } from "../../constants/StyleConstants";

//CONTROLLERS
import { HeaderText } from "../../controllers/TextController";

//COMPONENTS
import Touchable from "../../components/Touchable";

const Home = ({ navigation }) => {

    const restaurants = useSelector(state => state.restaurantReducer.allRestaurants);

    const [search, setSearch] = useState("");

    //Local Components
     const CardRender = ({ onPress, background, label }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.mealColoumn}>
                <View>
                    <ImageBackground source={background} style={styles.menuBg}>
                        <View style={styles.overlay} />
                        <View>
                            <HeaderText style={{ color: "#fff" }}>{label}</HeaderText>
                        </View>  
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
     };

    return (
        <ScrollView>
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

                    <CardRender 
                        onPress={() => navigation.navigate("SubMenu", { category: "pizza" })}
                        background={require("../../assets/images/pizza.jpg")}
                        label="Pizza"
                    />

                    <CardRender 
                        onPress={() => navigation.navigate("SubMenu", { category: "dessert" })}
                        background={require("../../assets/images/deserts.jpeg")}
                        label="Dessert"
                    />

                    <CardRender 
                        onPress={() => navigation.navigate("SubMenu", { category: "burger" })}
                        background={require("../../assets/images/pizza.jpg")}
                        label="Burger"
                    />

                    <CardRender 
                        onPress={() => navigation.navigate("SubMenu", { category: "japanese" })}
                        background={require("../../assets/images/pizza.jpg")}
                        label="Japanese"
                    />

                    <CardRender 
                        onPress={() => navigation.navigate("SubMenu"), { category: "drinks" }}
                        background={require("../../assets/images/pizza.jpg")}
                        label="Drinks"
                    />

                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const itemMargin = 20;

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        paddingHorizontal: 15,
        flex: 1,
    },
    searchContainer: {
        marginBottom: itemMargin,
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
        marginBottom: itemMargin,
    },
    menuBg: { 
        width: "100%", 
        height: "100%",
        justifyContent: "center",
        alignItems: "center", 
    },
});

export default Home;