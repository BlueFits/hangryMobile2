import { AUTHENTICATE } from "../actions/auth";

const initState = {
    user: null,
};

export default ( state = initState, action ) => {
    switch (action.type) {
        case AUTHENTICATE: 
            return {
                user: action.user
            }
        default:
            return state;
    }
};