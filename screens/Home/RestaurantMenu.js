import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

//Components
import SpecialCard from "../../components/SpecialCard";
import RegularCard from "../../components/RegularCard";
import MenuHeader from "../../components/MenuHeader";

//Controllers
import { DefaultText, HeaderText, SmallText } from "../../controllers/TextController";

const RestaurantMenu = ({ navigation }) => {

    const menu = useSelector(state => state.restaurantReducer.selectedMenu);

    return (
        <ScrollView>
            <View style={styles.screen}>
                    <SpecialCard 
                        backgroundImage = {require("../../assets/images/deserts.jpeg")}
                    />
                    {menu.mains.map((item, index) => {
                        return (
                            <RegularCard 
                                key={"menuKey"+index}
                                image = {require("../../assets/images/deserts.jpeg")}
                                title = {item.name}
                                description = {item.description}
                                price = {item.price.toString()}
                                onPress={() => navigation.navigate("Preview")}
                            />
                        );
                    })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 15,
    },
    menuCard: {
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

export default RestaurantMenu;