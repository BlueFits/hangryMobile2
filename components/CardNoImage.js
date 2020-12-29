import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import {
  DefaultText,
  SmallText,
  HeaderText,
} from "../controllers/TextController";
import { normalize } from "../controllers/FontController";

const CardNoImage = ({ title, description, price, category }) => {
  return (
    <View>
      <View style={styles.menuCard}>
        <View style={styles.menuText}>
          <DefaultText style={styles.title}>{title}</DefaultText>
          {title.length < 34 && category !== "None" && (
            <DefaultText style={styles.category}>{category}</DefaultText>
          )}
          {description !== "None" && (
            <SmallText style={styles.desc}>{description}</SmallText>
          )}
          <DefaultText style={styles.price}>
            {price ? `${price}` : ""}
          </DefaultText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    marginVertical: 12,
    width: "100%",
    aspectRatio: 10 / 4,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
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
    color: "#000",
  },
  desc: {
    position: "absolute",
    top: "45%",
    left: "4%",
    fontSize: normalize(11),
  },
  category: {
    position: "absolute",
    top: "22%",
    left: "4%",
    color: "#808080",
    fontSize: normalize(12),
    marginBottom: 20,
  },
  price: {
    position: "absolute",
    top: "80%",
    left: "4%",
    fontSize: normalize(14),
  },
});

export default CardNoImage;
