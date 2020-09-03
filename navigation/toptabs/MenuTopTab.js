import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//Screens
import Menu from "../../screens/Home/RestaurantMenu";

const TopTab = () => {
  return (
    <Tab.Navigator tabBarOptions={options}>
      <Tab.Screen name="Main" component={Menu} />
      <Tab.Screen name="Appetizers" component={Menu} />
      <Tab.Screen name="Dessert" component={Menu} />
      <Tab.Screen name="Drink" component={Menu} />
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