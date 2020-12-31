import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

//Screens
import Home from "../../screens/Home/Home";
import SubMenu from "../../screens/Home/SubMenu";
import restaurantMenu from "../../screens/Home/RestaurantMenu";
import Selection from "../../screens/Home/PreviewSelection";
import Filler from "../../screens/Filler";
import previewSelection from "../../screens/Home/PreviewSelection";

//Top Tabs
import Menu from "../toptabs/MenuTopTab";

//Components
import MenuHeader from "../../components/MenuHeader";
import HangryStaticHeader from "../../components/HangryStaticHeader";

///Init
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name='Home' component={Home} options={{ ...screenOptions, header: () => <HangryStaticHeader />}} />
      <Stack.Screen
        name='SubMenu'
        component={SubMenu}
        options={{
          ...screenOptions,
            cardStyle: {
              backgroundColor: "#F4F4F4",
            },
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name='Menu'
        component={Menu}
        options={({ route, navigation }) => {
          return {
            header: () => {
              return <MenuHeader navigation={navigation} />;
            },
          };
        }}
      />
      <Stack.Screen
        name='Preview'
        component={previewSelection}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

//Options
const defaultOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: "transparent",
  },
};

const screenOptions = {
  title: "",
  cardStyle: {
    backgroundColor: "white",
  },
};

export default HomeStack;
