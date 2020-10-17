import PRODUCTS from "../../data/dummy-data";


export const SET_MENU = "SET_MENU";

export const setMenu = (restaurantId) => {
    const restaurant = PRODUCTS.find(restaurant => restaurant._id === restaurantId);
    return { type: SET_MENU, menu: restaurant.menu };
};