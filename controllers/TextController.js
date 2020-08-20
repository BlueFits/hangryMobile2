import React from "react";
import { Text, StyleSheet } from "react-native";

export const DefaultText = (props) => {
    return (
        <Text style={{ ...styles.defaultText, ...props.style }}>{props.children}</Text>
    );
};

//Styles
const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16,
    },
});