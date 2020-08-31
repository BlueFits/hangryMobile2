import React from "react";
import { View, StyleSheet } from "react-native";

//Controllers
import { DefaultText } from "../../controllers/TextController";

const PreviewSelection = () => {
    return (
        <View style={styles.default}>
            <DefaultText>Preview Selection Page</DefaultText>
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
});

export default PreviewSelection;