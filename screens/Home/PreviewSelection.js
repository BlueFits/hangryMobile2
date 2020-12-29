import React from "react";
import { View, StyleSheet, ImageBackground, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Controllers
import { DefaultText, HeaderText } from "../../controllers/TextController";
import { overlay } from "../../constants/StyleConstants";
import { preventAutoHide } from "expo/build/launch/SplashScreen";

const PreviewSelection = ({ route }) => {
  return (
    <View style={styles.default}>
      <ImageBackground
        source={{ uri: route.params.image }}
        style={styles.bgImg}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.textContainer}
          start={[0, 0.8]}
        >
          <HeaderText style={{ color: "#fff" }}>{route.params.name}</HeaderText>
          {route.params.shortDescription !== "none" && (
            <DefaultText style={{ color: "#fff" }}>
              {route.params.shortDescription}
            </DefaultText>
          )}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 10,
  },
  overlay,
  bgImg: {
    flex: 1,
    justifyContent: "flex-end",
    ...Platform.select({
      ios: {
        width: "95%",
        height: "95%",
        position: "absolute",
        top: "7%",
        left: "5%",
      },
      android: {
        width: "100%",
        height: "100%",
      },
    }),
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    aspectRatio: 10 / 4,
    justifyContent: "center",
    padding: "4%",
  },
});

export default PreviewSelection;
