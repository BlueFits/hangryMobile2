
/* 
-Touchable Component- 
desc:
Automatically detect platform and render the right touchable depending on the OS. 
*/

import React from "react";
import { TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

const Touchable = (props) => {
    const TouchableToRender = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <TouchableToRender {...props}>{props.children}</TouchableToRender>
    );
};

export default Touchable;