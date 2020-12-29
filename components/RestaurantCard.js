import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  DefaultText,
  SmallText,
  HeaderText,
} from "../controllers/TextController";
import { TitleFormat, addressFormat } from "../controllers/FormatController";
import { normalize } from "../controllers/FontController";

const RestaurantCard = ({
  onPress,
  image,
  title,
  description,
  banner,
  address,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuCard}>
        <Image source={banner} style={styles.banner} />
        <Image source={image} style={styles.image} />
        <DefaultText style={styles.title}>{title}</DefaultText>
        <SmallText style={styles.address}>{addressFormat(address)}</SmallText>
        <SmallText style={styles.description}>{description}</SmallText>
      </View>
    </TouchableOpacity>
    // <TouchableOpacity onPress={onPress}>
    //   <View style={styles.menuCard}>
    //     <Image source={banner} style={styles.banner} />
    //     <View style={{ flex: 2 }}>
    //       <Image
    //         source={image}
    //         style={{ height: "100%", width: "100%", borderRadius: 5 }}
    //       />
    //     </View>
    //     <View style={styles.menuText}>
    //       <DefaultText style={styles.title}>{title}</DefaultText>
    // {description !== "None" && <SmallText>{description}</SmallText>}

    // <DefaultText>{price ? `${price}` : ""}</DefaultText>
    //     </View>
    //   </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    marginVertical: 15,
    height: 250,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
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
    top: "48%",
    left: "37%",
    color: "#000",
    fontSize: normalize(16),
  },
  banner: {
    width: "100%",
    aspectRatio: 10 / 3,
    position: "relative",
  },
  image: {
    width: "30%",
    aspectRatio: 10 / 10,
    zIndex: 10,
    position: "absolute",
    top: "20%",
    left: "4%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  address: {
    position: "absolute",
    left: "37%",
    top: "60%",
    fontSize: normalize(9),
    color: "#808080",
  },
  description: {
    position: "absolute",
    width: "93%",
    left: "4%",
    top: "70%",
    fontSize: normalize(11),
    color: "#808080",
    display: "flex",
    flex: 3,
  },
});

export default RestaurantCard;
