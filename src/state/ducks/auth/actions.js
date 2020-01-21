import {authService} from "../../../service/auth-service";
import {userService} from "../../../service/user-service";
import * as types from "./types"
import {history} from "../../../helpers/History"
import {goalActions} from '../goal'
import {createNotification} from "../../../helpers/helpers";
import jwt_decode from 'jwt-decode';

export const authActions = {
  setCurrentUser,
  register,
  login,
  logout,
  resetPassword
};

function register(login, password) {
  return async dispatch => {
    dispatch(request({login}));
    try {
      let response = await authService.register(login, password)
      history.push("/login");
      dispatch(success(response.data));
    } catch (e) {
      createNotification('error', e.response.data.message);
    }
  };

  function request(user) {
    return {type: types.REGISTER_REQUEST, user}
  }

  function success(user) {
    return {type: types.REGISTER_SUCCESS, user}
  }
}

function login(login, password) {
  return async dispatch => {
    dispatch(request({login}));
    try {
      let response = await authService.login(login, password);
      localStorage.setItem('jwt', JSON.stringify(response.data));
      const user = jwt_decode(response.data.accessToken);
      dispatch(success(user.sub));
      history.push("/");
    } catch (e) {
      createNotification('error', e.response.data.message);
    }
  };

  function request(user) {
    return {type: types.LOGIN_REQUEST, user}
  }

  function success(user) {
    return {type: types.LOGIN_SUCCESS, user}
  }

  function error(user) {
    return {type: types.LOGIN_FAILURE, user}
  }
}

function resetPassword(password, newPassword) {
  return dispatch => {
    dispatch(request());

    authService.resetPassword(password, newPassword)
      .then(
        response => {
          dispatch(success());
          history.push("/");
        },
        error => {
          alert(error.message);
        }
      );
  };

  function request() {
    return {type: types.RESET_PASS_REQUEST}
  }

  function success() {
    return {type: types.RESET_PASS_SUCCESS}
  }
}

function setCurrentUser(login) {
  return dispatch => {
    dispatch(request());

    userService.getByLogin(login)
      .then(
        response => {
          dispatch(success(response.data));
        },
        error => {
          alert(error.message);
        }
      );
  };

  function request() {
    return {type: types.SET_CURRENT_USER_REQUEST}
  }

  function success(user) {
    return {type: types.SET_CURRENT_USER_SUCCESS, user}
  }
}

function logout() {
  authService.logout();
  history.push("/");
  return {type: types.LOGOUT}
}