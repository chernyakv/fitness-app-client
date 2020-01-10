import {constants} from "../../constants/constants";
import {authService} from "../../service/auth.service"

let login = authService.getCurrentUserLogin();
let token = localStorage.getItem('jwt');
const initialState = token ? {isAuth: true, token, login, profile: null} : {isAuth: false, profile: null};

export function authReducer(state = initialState, action) {
  switch (action.type) {

    case constants.REGISTER_REQUEST:
      return {
        ...state,
        user: action.user
      };
    case constants.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case constants.LOGIN_REQUEST:
      return {
        ...state
        //user: action.user
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
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

    case constants.SET_USER_GOAL_SUCCESS:
      return {
        ...state,
        isAuth: true,
        profile: action.user
      };

    default:
      return state;
  }
}