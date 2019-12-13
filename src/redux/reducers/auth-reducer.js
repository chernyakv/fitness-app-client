import { constants } from "../../constants/constants";
import { authService } from "../../service/auth.service"

let login = authService.getCurrentUserLogin();
let token = localStorage.getItem('jwt');
const initialState = token ? { isAuth: true, token, login, profile: null } : { isAuth: false, profile: null };

export function authReducer(state = initialState, action) {
    debugger;
    switch (action.type) {

        case constants.REGISTER_REQUEST:
            return {
                user: action.user
            };
        case constants.REGISTER_SUCCESS:
            return {
                user: action.user
            };
        case constants.LOGIN_REQUEST:
            return {
                //user: action.user
            };
        case constants.LOGIN_SUCCESS:
            return {
                isAuth: true,
                login: action.user
                //user: action.user
            };
        case constants.SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                profile: action.user
            };
        case constants.LOGOUT:
            return {};

        default:
            return state;
    }

    
}