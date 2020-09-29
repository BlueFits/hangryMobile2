import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";

//Components
import SpecialCard from "../../components/SpecialCard";
import RegularCard from "../../components/RegularCard";

//Controllers
import { DefaultText, HeaderText, SmallText } from "../../controllers/TextController";

const RestaurantMenu = () => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                    <SpecialCard 
                        backgroundImage = {require("../../assets/images/deserts.jpeg")}
                    />
                    <RegularCard 
                        image = {require("../../assets/images/deserts.jpeg")}
                        title = "French Madelaines"
                        description = "Our beautifully crafted madeleines are baked fresh daily, and coated with... strawberry crema, ready to die for."
                        price = "9.99"
                    />
                    <RegularCard 
                        image = {require("../../assets/images/deserts.jpeg")}
                        title = "French Madelaines"
                        description = "Our beautifully crafted madeleines are baked fresh daily, and coated with... strawberry crema, ready to die for."
                        price = "9.99"
                    />
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