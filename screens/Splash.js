import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../store/actions/auth";
import Colors from "../constants/Colors";

const splash = ({ navigation }) => {

    const dispatch = useDispatch()
    const user = useSelector(authSelector => authSelector.authReducer.user);

    useEffect(()=> {
        const tryLogin = async () => {
            if (!user) {
                navigation.navigate("Login");
            } else {
                dispatch(authenticate())
            }  
        };

        tryLogin();
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <ActivityIndicator size="large" color={Colors.primary} /> 
        </View>
    );
};

export default splash;
