import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

//Constants
import Colors from "../../constants/Colors";

//Components
import SpecialCard from "../../components/SpecialCard";
import RegularCard from "../../components/RegularCard";

const RestaurantMenu = ({ navigation }) => {

    const menu = useSelector(state => state.restaurantReducer.selectedMenu);

    if (!menu) {
        return (
            <View style={{ flex: 1 , justifyContent: "center" }}>
                <ActivityIndicator size={28} color={Colors.primary}/>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.screen}>
                    {menu.map((item, index) => {
                        if (item.isSpecial) {
                            return (
                                <SpecialCard 
                                    key={"specialCardKey"+index}
                                    title={item.name}
                                    shortDescription={item.shortDescription}
                                    price={item.price}
                                    backgroundImage = {{ uri: item.imageUrl }}
                                    onPress={() => navigation.navigate("Preview", {
                                        image: item.imageUrl,
                                        name: item.name,
                                        shortDescription: item.shortDescription,
                                    })}
                                />                           
                            );
                        }
                    })}
                    {menu.map((item, index) => {
                        return (
                            <RegularCard 
                                key={"menuKey"+index}
                                image = {{ uri: item.imageUrl }}
                                title = {item.name}
                                description = {item.description}
                                price = {item.price.toString()}
                                onPress={() => navigation.navigate("Preview", {
                                    image: item.imageUrl,
                                    name: item.name,
                                    shortDescription: item.shortDescription,
                                })}
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
        paddingVertical: 7.5,
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