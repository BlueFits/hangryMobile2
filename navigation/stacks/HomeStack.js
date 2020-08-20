import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Home from "../../screens/Home";

///Init
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={defaultOptions}>
            <Stack.Screen name="Home" component={Home} options={{
                title: "",
            }}/>
            {/* <Stack.Screen name="PreviewSelection" component={}/> */}
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

export default HomeStack;