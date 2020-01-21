import * as types from "./types"
import {authService} from "../../../service/auth-service"

let login = authService.getCurrentUserLogin();
let token = localStorage.getItem('jwt');
const initialState = token ? {isAuth: true, token, login, profile: null} : {isAuth: false, profile: null};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.REGISTER_REQUEST:
      return {
        ...state,
        user: action.user
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user
      };

    case types.LOGIN_REQUEST:
      return {
        ...state
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        login: action.user
      };


    case types.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        profile: action.user
      };
    case types.LOGOUT:
      return {};

    case types.SET_USER_GOAL_SUCCESS:
      return {
        ...state,
        isAuth: true,
        profile: action.user
      };

    default:
      return state;
  }
}

export default authReducer;