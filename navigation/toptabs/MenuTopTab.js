import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

//Actions Redux
import { switchCategory } from "../../store/actions/restaurants";
import { normalize } from "../../controllers/FontController";

const Tab = createMaterialTopTabNavigator();

//Screens
import Menu from "../../screens/Home/RestaurantMenu";

const TopTab = () => {
  const restaurant = useSelector(
    (state) => state.restaurantReducer.selectedRestaurant
  );
  const dispatch = useDispatch();

  let MainsTab;
  if (restaurant.menu.mains.length > 0)
    MainsTab = (
      <Tab.Screen
        name='mains'
        component={Menu}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              dispatch(switchCategory("mains"));
              navigation.jumpTo("mains");
            },
          };
        }}
      />
    );

  let AppetizerTab;
  if (restaurant.menu.appetizers.length > 0)
    AppetizerTab = (
      <Tab.Screen
        name='appetizers'
        component={Menu}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              dispatch(switchCategory("appetizers"));
              navigation.jumpTo("appetizers");
            },
          };
        }}
      />
    );

  let DessertsTab;
  if (restaurant.menu.desserts.length > 0)
    DessertsTab = (
      <Tab.Screen
        name='desserts'
        component={Menu}
        style={styles.screen}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              dispatch(switchCategory("desserts"));
              navigation.jumpTo("desserts");
            },
          };
        }}
      />
    );

  let DrinksTab;
  if (restaurant.menu.drinks.length > 0)
    DrinksTab = (
      <Tab.Screen
        name='drinks'
        component={Menu}
        listeners={({ navigation }) => {
          return {
            tabPress: (e) => {
              e.preventDefault();
              dispatch(switchCategory("drinks"));
              navigation.jumpTo("drinks");
            },
          };
        }}
      />
    );

  return (
    <Tab.Navigator tabBarOptions={options} swipeEnabled={false}>
      {MainsTab}
      {AppetizerTab}
      {DessertsTab}
      {DrinksTab}
    </Tab.Navigator>
  );
};

const options = {
  scrollEnabled: true,
  tabStyle: {
    width: 130,
    zindex: 10,
    color: "red",
  },
  indicatorStyle: {
    backgroundColor: "#F26224",
  },
  // labelStyle: {
  //     fontFamily: "roboto-bold",
  // },
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 200,
    backgroundColor: "red",
  },
});

export default TopTab;
