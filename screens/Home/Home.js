import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Button} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as firebase from 'firebase';
import { clearRestaurants } from "../../store/actions/restaurants"


//Action Redux
import { filterCategory } from "../../store/actions/restaurants"

//Constants
import { overlay } from "../../constants/StyleConstants";

//CONTROLLERS
import { HeaderText } from "../../controllers/TextController";


const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    useEffect(() => {
    const leaveScreen = navigation.addListener("focus", () => {
        dispatch(clearRestaurants());
    });

    return leaveScreen;
    }, [navigation]);

    //Methods
    const onPressHandler = (category, backgroundUri) => {
        dispatch(filterCategory(category));
        navigation.navigate("SubMenu", { category, backgroundUri });
    }

    //Local Components
     const CardRender = ({ onPress, background, label }) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.mealColoumn}>
                <View>
                    <ImageBackground source={{ uri: background }} style={styles.menuBg}>
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
                    {/* <View style={styles.searchContainer}>
                        <Ionicons name="ios-search" size={24} color="black" />
                        <TextInput
                            style={styles.input}
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                            placeholder={"Search restaurant or dish"}
                            placeholderTextColor={"#4D4D4D"}
                        />
                    </View> */}

                    {/* <CardRender 
                        onPress={onPressHandler.bind(this, "pizza", "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")}
                        background={"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
                        label="Pizza"
                    /> */}

                    <CardRender 
                        onPress={onPressHandler.bind(this, "chinese", "https://images.unsplash.com/photo-1562403492-454d4b075cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1329&q=80")}
                        background={"https://images.unsplash.com/photo-1562403492-454d4b075cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1329&q=80"}
                        label="Chinese"
                    />
                    
                    <CardRender 
                        onPress={onPressHandler.bind(this, "korean", "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")}
                        background={"https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                        label="Korean"
                    />

                    <CardRender 
                        onPress={onPressHandler.bind(this, "indian", "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")}
                        background={"https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                        label="Indian"
                    />

                    <CardRender 
                        onPress={onPressHandler.bind(this, "dessert", "https://i.imgur.com/yLCbyX9.png")}
                        background={"https://i.imgur.com/yLCbyX9.png"}
                        label="Dessert"
                    />

                    <CardRender 
                        onPress={onPressHandler.bind(this, "burger", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")}
                        background={"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
                        label="Burger"
                    />

                    <CardRender 
                        onPress={onPressHandler.bind(this, "japanese", "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80")}
                        background={"https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"}
                        label="Japanese"
                    />

                    <CardRender 
                        onPress={onPressHandler.bind(this, "pub", "https://images.unsplash.com/photo-1549807315-f5fa45619e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")}
                        background={"https://images.unsplash.com/photo-1549807315-f5fa45619e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}
                        label="Pub"
                    />

                    <CardRender 
                        onPress={onPressHandler.bind(this, "drinks", "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80")}
                        background={"https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80"}
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