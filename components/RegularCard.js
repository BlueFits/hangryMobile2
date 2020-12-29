import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  DefaultText,
  SmallText,
  HeaderText,
} from "../controllers/TextController";
import { normalize } from "../controllers/FontController";
const RegularCard = ({ onPress, image, title, description, price, banner }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuCard}>
        <View style={{ flex: 2 }}>
          <Image
            source={banner}
            style={{ height: "100%", width: "100%", borderRadius: 5 }}
          />
        </View>
        <View style={styles.menuText}>
          <HeaderText style={styles.title}>{title}</HeaderText>
          {description !== "None" && (
            <SmallText style={styles.desc}>{description}</SmallText>
          )}

          <DefaultText style={styles.price}>
            {price ? `${price}` : ""}
          </DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    marginVertical: 10,
    height: 150,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  menuText: {
    flex: 3,
    paddingLeft: 15,
    justifyContent: "space-around",
  },
  title: {
    position: "absolute",
    top: "5%",
    left: "4%",
    fontSize: normalize(14),

    paddingBottom: 10,
    color: "#000",
  },
  price: {
    position: "absolute",
    top: "80%",
    left: "4%",
    fontSize: normalize(14),
  },
  desc: {
    position: "absolute",
    top: "45%",
    left: "4%",
    fontSize: normalize(12),
  },
});

export default RegularCard;
