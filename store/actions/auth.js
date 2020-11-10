import * as firebase from "firebase";

export const AUTHENTICATE = "AUTHENTICATE";

export const authenticate = () => {
    return async (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch({
                    type: AUTHENTICATE,
                    user,
                });
            } else {
                dispatch({
                    type: AUTHENTICATE,
                    user: null,
                });
            }
        });
    }
};