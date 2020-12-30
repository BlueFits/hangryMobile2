import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//Controllers
import {
  DefaultText,
  SmallText,
  HeaderText,
} from "../controllers/TextController";

//Constants
import { overlay } from "../constants/StyleConstants";
import { normalize } from "../controllers/FontController";

const SpecialCard = ({
  backgroundImage,
  title,
  shortDescription,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={backgroundImage} style={styles.menuBg}>
        <View style={styles.overlay} />
        <View style={styles.specialHeader}>
          <View style={styles.flag}>
            <SmallText style={{ color: "#fff", fontSize: normalize(11) }}>
              Featured Item
            </SmallText>
          </View>
        </View>
        <View style={styles.specialBottom}>
          <HeaderText style={{ color: "#fff", fontSize: normalize(18) }}>
            {title}
          </HeaderText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {shortDescription !== "None" && (
              <DefaultText style={{ color: "#fff", fontSize: normalize(13) }}>
                {shortDescription}
              </DefaultText>
            )}

            <DefaultText style={{ color: "#fff", fontSize: normalize(13) }}>
              {price}
            </DefaultText>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay,
  menuBg: {
    borderRadius: 8,
    overflow: "hidden",
    height: normalize(150),
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: normalize(8),
    marginVertical: normalize(9),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  flag: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20649C",
    padding: 3,
  },
  specialHeader: {
    width: "100%",
  },
  specialBottom: {
    width: "100%",
    paddingHorizontal: normalize(7),
  },
});

export default SpecialCard;
