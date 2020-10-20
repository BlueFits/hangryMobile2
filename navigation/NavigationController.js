import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

//Constants
import Colors from "../constants/Colors";

//Screens
import Filler from "../screens/Filler";
import Qr from "../screens/Qr/qr";

//Stacks
import HomeStack from "./stacks/HomeStack";

//Initialized Variables
const Tab = createMaterialBottomTabNavigator();

const NavigationController = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home"
                barStyle={{ backgroundColor: Colors.primary }}
                activeColor="#fff"
            >
                <Tab.Screen name="Home" component={HomeStack} options={{
                   tabBarIcon: (tabInfo) => {
                    return (
                        <Entypo name="home" size={24} color={tabInfo.color} />
                    );
                   }, 
                }} />
                <Tab.Screen name="Qr" component={Qr} options={{
                    tabBarIcon: (tabInfo) => <Ionicons name="ios-qr-scanner" size={24} color={tabInfo.color} />
                }} />
                <Tab.Screen name="Account" component={Filler} options={{
                    tabBarIcon: (tabInfo) => <MaterialCommunityIcons name="account" size={24} color={tabInfo.color} />
                }} />
            </Tab.Navigator>
        </NavigationContainer>  
    );
};

export default NavigationController;