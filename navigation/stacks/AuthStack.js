import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../../screens/Auth/LoginScreen";
import Register from "../../screens/Auth/RegisterScreen";
import Loading from "../../screens/Splash";


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={Loading} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack;