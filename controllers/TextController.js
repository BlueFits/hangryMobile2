import React from "react";
import { Text, StyleSheet } from "react-native";
import { normalize } from "../controllers/FontController";

export const DefaultText = (props) => {
  return (
    <Text
      style={{
        fontFamily: "roboto-regular",
        ...styles.defaultText,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
};

export const HeaderText = (props) => {
  return (
    <Text
      style={{ fontFamily: "roboto-bold", ...styles.header, ...props.style }}
    >
      {props.children}
    </Text>
  );
};

export const SmallText = (props) => {
  return (
    <Text
      style={{ fontFamily: "roboto-regular", ...styles.small, ...props.style }}
    >
      {props.children}
    </Text>
  );
};

//Styles
const styles = StyleSheet.create({
  defaultText: {
    fontSize: 30,
    color: "#404040",
  },
  header: {
    fontSize: normalize(22),
  },
  small: {
    fontSize: 14,
  },
});
