import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from '@react-navigation/stack';


//Screens
import Home from "../../screens/Home/Home";
import SubMenu from "../../screens/Home/SubMenu";
import restaurantMenu from "../../screens/Home/RestaurantMenu";
import Selection from "../../screens/Home/PreviewSelection";
import Filler from "../../screens/Filler";

//Top Tabs
import Menu from "../toptabs/MenuTopTab";

//Components
import MenuHeader from "../../components/MenuHeader";

///Init
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultOptions}>
            <Stack.Screen name="Home" component={Home} options={screenOptions}/>
            <Stack.Screen name="SubMenu" component={SubMenu} options={{...screenOptions, ...{
                cardStyle: {
                    backgroundColor: "#F4F4F4",
                },
                //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}}/>
            <Stack.Screen name="Menu" component={Menu} options={{
                header: ({ navigation }) => {
                    return <MenuHeader navigation={navigation}/>
                }, 
            }}/>
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