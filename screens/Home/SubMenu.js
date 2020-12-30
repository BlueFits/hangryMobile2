import React, { useEffect } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setRestaurant,
  clearRestaurants,
} from "../../store/actions/restaurants";

//Components
import RestaurantCard from "../../components/RestaurantCard";

//Controllers
import { HeaderText, DefaultText } from "../../controllers/TextController";
import {
  TitleFormat,
  FirstLetterUppercase,
} from "../../controllers/FormatController";

const SubMenu = ({ navigation, route }) => {
  const dispatch = useDispatch();

  let restaurants = useSelector(
    (state) => state.restaurantReducer.allRestaurants
  );

  // useEffect(() => {
  //   const leaveScreen = navigation.addListener("blur", () => {
  //     dispatch(clearRestaurants());
  //   });

  //   return leaveScreen;
  // }, [navigation]);

  //Methods

  const pressHandler = (restaurant) => {
    dispatch(setRestaurant(restaurant._id));
    navigation.navigate("Menu");
  };

  const renderCards = () => {
    return restaurants.map((restaurant, index) => {
      return (
        <RestaurantCard
          key={"subMenuKey" + index}
          onPress={pressHandler.bind(this, restaurant)}
          image={{ uri: restaurant.imageUrl }}
          title={TitleFormat(restaurant.name)}
          banner={{ uri: restaurant.bannerUrl }}
          description={FirstLetterUppercase(restaurant.shortDescription)}
          address={restaurant.address}
        />
      );
    });
  };

  return (
    <ScrollView>
      <View style={styles.banner}>
        <ImageBackground
          source={{ uri: route.params.backgroundUri }}
          style={styles.menuBg}
        >
          <View style={styles.overlay} />
          <View>
            <HeaderText style={{ color: "#fff" }}>
              {TitleFormat(route.params.category)}
            </HeaderText>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.subMenu}>
        {restaurants.length === 0 ? (
          <View style={{ paddingVertical: 20 }}>
            <DefaultText>Loading...</DefaultText>
          </View>
        ) : (
          renderCards()
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.3,
  },
  menuBg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 220,
  },
  subMenu: {
    padding: 15,
    alignItems: "center",
  },
  menuCard: {
    height: 150,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  menuText: {
    flex: 3,
    paddingLeft: 15,
    justifyContent: "space-around",
  },
});

export default SubMenu;
