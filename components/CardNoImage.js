import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { DefaultText, SmallText } from "../controllers/TextController";

const CardNoImage = ({ title, description, price, category }) => {
  return (
    <TouchableOpacity>
      <View style={styles.menuCard}>
        <View style={styles.menuText}>
          <DefaultText style={styles.title}>{title}</DefaultText>
          {category !== "None" && (
            <DefaultText style={styles.category}>{category}</DefaultText>
          )}
          {description !== "None" && (
            <SmallText style={styles.desc}>{description}</SmallText>
          )}
          <DefaultText>{price ? `${price}` : ""}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    marginVertical: 12,
    height: 150,
    width: "100%",
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
    fontSize: 18,
    color: "#000",
  },
  desc: {
    marginBottom: 20,
    fontSize: 15,
  },
  category: {
    color: "#808080",
    fontSize: 16,
    marginBottom: 20,
  },
});

export default CardNoImage;
