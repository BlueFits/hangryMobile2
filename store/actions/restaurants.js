import PRODUCTS from "../../data/dummy-data";


export const SET_RESTAURANT = "SET_RESTAURANT";
export const SWITCH_CATEGORY = "SWITCH_CATEGORY";

export const setRestaurant = (restaurantId) => {
    const restaurant = PRODUCTS.find(restaurant => restaurant._id === restaurantId);
    return { type: SET_RESTAURANT, restaurant };
}

export const switchCategory = (category) => {
    return { type: SWITCH_CATEGORY, category };
}