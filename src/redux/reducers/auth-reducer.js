import { constants } from "../../constants/constants";


let token = localStorage.getItem('jwt');
const initialState = token ? { isAuth: true, token } : {isAuth: false};

export function authReducer(state = initialState, action) {
   
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {
                isAuth: true,
                user: action.user
            };
        case constants.LOGIN_SUCCESS:
            return {
                isAuth: true,
                user: action.user
            };
        case constants.LOGOUT:
            return {};

        default:
            return state;
    }
}