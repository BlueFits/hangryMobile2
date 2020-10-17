import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../store/actions/restaurants"

//Components
import Touchable from "../../components/Touchable";
import RegularCard from "../../components/RegularCard";

//Controllers
import { DefaultText, HeaderText, SmallText } from "../../controllers/TextController";

const SubMenu = ({ navigation, route }) => {

    const dispatch = useDispatch();

    let restaurants = useSelector(state => state.restaurantReducer.allRestaurants).filter(restaurant => restaurant.category === route.params.category);

    //Methods

    const pressHandler = (restaurant) => {
        dispatch(setMenu(restaurant._id));
        navigation.navigate("Menu", { 
            restaurant,
         });
    };

    return (
        <ScrollView>
            <View style={styles.banner}>
                <ImageBackground source={require("../../assets/images/deserts.jpeg")} style={styles.menuBg}>
                        <View style={styles.overlay} />
                        <View>
                            <HeaderText style={{ color: "#fff" }}>{route.params.category}</HeaderText>
                        </View>  
                </ImageBackground>
            </View>

            <View style={styles.subMenu}>
                {restaurants.map((restaurant, index) => {
                    return (
                        <RegularCard
                            key={"subMenuKey"+index}
                            onPress = {pressHandler.bind(this, restaurant)}
                            image = {{ uri: restaurant.picture }}
                            title={restaurant.name}
                            description={restaurant.website}
                        />
                    );
                })}
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
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.3
      },
      menuBg: { 
        width: "100%", 
        height: "100%",
        justifyContent: "center",
        alignItems: "center", 
    },
    banner : {
        height: 220,
    },
    subMenu: {
        padding: 15,
    },
    menuCard: {
        height: 150,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    menuText: {
        flex: 3,
        paddingLeft: 15, 
        justifyContent: "space-around"
    },
});

export default SubMenu;