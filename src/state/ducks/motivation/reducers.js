import * as types from "./types"

const initialState = {
    loading: false,
    motivations: false,
    error: false
};
const motivationReducer = (state = initialState, action) => {

    switch (action.type) {


        case types.GET_USER_MOTIVATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case types.GET_USER_MOTIVATION_SUCCESS:

            return {
                ...state,
                motivations: action.motivation,
                loading: false,
                error: false
            };
        case types.GET_USER_MOTIVATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };


        default:
            return state;
    }
};
export default motivationReducer;