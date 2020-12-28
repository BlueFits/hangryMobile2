import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Image,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as Linking from "expo-linking";

//Components
import Touchable from "../components/Touchable";

//Controllers
import {
  DefaultText,
  HeaderText,
  SmallText,
} from "../controllers/TextController";
import { TitleFormat, addressFormat } from "../controllers/FormatController";

//Consants
import { overlay } from "../constants/StyleConstants";
import Colors from "../constants/Colors";

const MenuHeader = ({ navigation }) => {
  const restaurant = useSelector(
    (state) => state.restaurantReducer.selectedRestaurant
  );

  console.log(restaurant);

  const instagramOpen = (instagramHandle) => {
    if (instagramHandle !== "none") {
      Linking.openURL(instagramHandle);
    }
  };

  if (!restaurant) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size={28} color={Colors.primary} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.screen}>
        <ImageBackground
          source={{ uri: restaurant.bannerUrl }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
          <View style={styles.boxContainer}>
            <Image source={restaurant.imageUrl} style={styles.image} />

            <HeaderText style={styles.title}>
              {TitleFormat(restaurant.name)}
            </HeaderText>
            <DefaultText style={styles.address}>
              {TitleFormat(restaurant.address)}
            </DefaultText>
          </View>
          {/* <View style={styles.overlay} />
        <View style={styles.headerTop}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
            <AntDesign name='close' size={24} color='white' />
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <View style={styles.followElemContainer}>
              <AntDesign
                name='instagram'
                size={35}
                color='white'
                onPress={instagramOpen(restaurant.instagramHandle)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <HeaderText style={styles.text}>
            {TitleFormat(restaurant.name)}
          </HeaderText>
          <View style={styles.middleTextContainer}>
            <SmallText style={styles.text}>
              {TitleFormat(restaurant.address)}
            </SmallText>
            <SmallText style={styles.text}>
              4.4 <Entypo name='star' size={16} color='white' /> 50 reviews
            </SmallText>{" "}
          </View>
          <Button title='Check-In!' color={Colors.primary} />
        </View> */}
        </ImageBackground>
      </View>
      {/* <View style={styles.space}></View> */}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 215,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    color: "red",
    zIndex: 2,
  },
  headerContainer: {
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  middleTextContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  headerTop: {
    width: "100%",
    paddingTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  followBttn: {
    height: 30,
    width: 120,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  followElemContainer: {
    flexDirection: "row",
    paddingTop: 0,
    justifyContent: "space-between",
  },
  boxContainer: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: "50%",
    left: "4%",
    alignItems: "center",
    width: "92%",
    height: "80%",
    borderRadius: 12,
  },
  space: {
    height: "11%",
    backgroundColor: "#FFF",
    zIndex: -1,
  },
  image: {
    width: "20%",
    aspectRatio: 10 / 10,
    zIndex: 10,
    position: "absolute",
    top: "30%",
    left: "40%",
    borderRadius: 8,
  },
  title: {
    top: "25%",
  },
  address: {
    top: "30%",
    width: "80%",
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default MenuHeader;
