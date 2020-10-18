import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useDispatch } from "react-redux";

//Actions Redux
import { switchCategory } from "../../store/actions/restaurants";

const Tab = createMaterialTopTabNavigator();

//Screens
import Menu from "../../screens/Home/RestaurantMenu";

const TopTab = () => {

  const dispatch = useDispatch()

  return (
    <Tab.Navigator tabBarOptions={options} swipeEnabled={false}>
      <Tab.Screen name="mains" component={Menu} listeners={({ navigation }) => {
        return ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch(switchCategory("mains"));
            navigation.jumpTo("mains");
          }
        });
      }} />
      <Tab.Screen name="appetizers" component={Menu} listeners={({ navigation }) => {
        return ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch(switchCategory("appetizers"));
            navigation.jumpTo("appetizers");
          }
        });
      }} />
      <Tab.Screen name="desserts" component={Menu} listeners={({ navigation }) => {
        return ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch(switchCategory("desserts"));
            navigation.jumpTo("desserts");
          }
        });
      }} />
      <Tab.Screen name="drinks" component={Menu} listeners={({ navigation }) => {
        return ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch(switchCategory("drinks"));
            navigation.jumpTo("drinks");
          }
        });
      }} />
    </Tab.Navigator>
  );
}

const options = { 
    scrollEnabled: true, 
    tabStyle: { 
        width: 130 
    },
    indicatorStyle: {
        backgroundColor: "#F26224",
    },
    // labelStyle: {
    //     fontFamily: "roboto-bold",
    // },
};

export default TopTab;