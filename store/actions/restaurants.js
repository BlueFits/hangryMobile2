import PRODUCTS from "../../data/dummy-data";


export const SET_RESTAURANT = "SET_RESTAURANT";
export const SWITCH_CATEGORY = "SWITCH_CATEGORY";
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const CLEAR_RESTAURANTS = "CLEAR_RESTAURANTS";

export const clearRestaurants = () => {
    return { type: CLEAR_RESTAURANTS }
}

export const setRestaurant = (restaurantId) => {
    try {
        return async (dispatch) =>{
            const res = await fetch("http://192.168.2.252:5000/fetch_single_restaurant", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: restaurantId
                }),
            });
            const resData = await res.json();
            if (!res.ok) {
                throw new Error(resData.error);
            } else {
                dispatch({
                    type: SET_RESTAURANT,
                    restaurant: resData,
                });
            }
        }
    } catch(err) {
        throw err;
    }
    // return { type: SET_RESTAURANT, restaurantId };
}

export const switchCategory = (category) => {
    return { type: SWITCH_CATEGORY, category };
}

export const filterCategory = (restaurantCategory) => {
    try {
        return async (dispatch) => {
            const response = await fetch("http://192.168.2.252:5000/fetch_restaurants", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    category: restaurantCategory
                }),
            });
            if (!response.ok) {
                const errResData = await response.json();
                throw new Error(errResData.error);
            } else {
                const resData = await response.json();
                dispatch({
                    type: FILTER_CATEGORY,
                    restaurants: resData,
                });
            }
        }
    } catch(err) {
        throw err;
    }
}