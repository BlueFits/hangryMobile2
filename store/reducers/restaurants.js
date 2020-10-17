import PRODUCTS from "../../data/dummy-data";

import { SET_MENU } from "../actions/restaurants";

const initialState = {
    allRestaurants: PRODUCTS,
    selectedMenu: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MENU:
            return {...state, selectedMenu: action.menu}
        default:
            return state;
    }
};