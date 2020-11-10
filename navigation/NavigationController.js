import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import * as firebase from "firebase";

//Constants
import Colors from "../constants/Colors";

//Screens
import Filler from "../screens/Filler";
import Qr from "../screens/Qr/qr";
import Profile from "../screens/Profile/profile";

//Stacks
import HomeStack from "./stacks/HomeStack";
import AuthStack from "./stacks/AuthStack";

//Initialized Variables
const Tab = createMaterialBottomTabNavigator();

const NavigationController = () => {

    const userSession = useSelector(authState => authState.authReducer.user);
    
    if (userSession === null) {
        return <AuthStack />;
    }

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
                <Tab.Screen name="Account" component={Profile} options={{
                    tabBarIcon: (tabInfo) => <MaterialCommunityIcons name="account" size={24} color={tabInfo.color} />
                }} />
            </Tab.Navigator>
        </NavigationContainer>  
    );
};

export default NavigationController;