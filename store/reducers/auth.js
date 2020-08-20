import { AUTHENTICATE } from "../actions/auth";

const initState = {
    //Will Do once back end schemas are known
};

export default ( state = initState, action ) => {
    switch (action.type) {
        case AUTHENTICATE: 
            //Waiting for schemas
            return state;
            break;
        default:
            return state;
    }
};