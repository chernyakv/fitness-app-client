import {constants} from "../constants/constants";
import {userService} from "../service/user.service";
import {show} from 'redux-modal';
import {createNotification} from "../helpers/helpers";

export const usersActions = {
  getAll,
  addUser,
  updateUser,
  deleteUser,
  setGoal,
  showModal,
  getUserParameters
};

function getAll() {
  return dispatch => {
    dispatch(request())

    userService.getAll()
      .then(
        response => {
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: constants.USERS_GET_ALL_REQUEST}
  }

  function success(users) {
    return {type: constants.USERS_GET_ALL_SUCCESS, users}
  }

  function failure() {
    return {type: constants.USERS_GET_ALL_FAILURE}
  }
}

function addUser(user) {
  return dispatch => {
    dispatch(request(user));

    userService.addUser(user)
      .then(
        response => {
          createNotification('success', 'User has been added');
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function success(user) {
    return {type: constants.USER_ADD_SUCCESS, user}
  }

  function request(user) {
    return {type: constants.USER_ADD_REQUEST, user}
  }

  function failure() {
    return {type: constants.USER_ADD_FAILURE}
  }

}

function deleteUser(id) {
  return dispatch => {
    dispatch(request(id));

    userService.deleteUser(id)
      .then(
        response => {
          createNotification('success', 'User has been deleted');
          dispatch(success(id));
        },
        error => {
          dispatch(failure(id));
        }
      );
  };

  function success(id) {
    return {type: constants.USER_DELETE_SUCCESS, id}
  }

  function request(id) {
    return {type: constants.USER_DELETE_REQUEST, id}
  }

  function failure(id) {
    return {type: constants.USER_DELETE_FAILURE, id}
  }
}

function updateUser(user) {
  return dispatch => {
    dispatch(request(user));

    userService.updateUser(user)
      .then(
        response => {
          createNotification('success', 'User has been updated');
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure(error.message));
        }
      );
  };

  function success(user) {
    return {type: constants.USER_UPDATE_SUCCESS, user}
  }

  function request(user) {
    return {type: constants.USER_UPDATE_REQUEST, user}
  }

  function failure(message) {
    return {type: constants.USER_UPDATE_FAILURE, message}
  }
}

function setGoal(userId, templateId) {
  return dispatch => {
    debugger;
    dispatch(request(userId));

    userService.setGoal(userId, templateId)
      .then(
        response => {
          createNotification('success', 'Goal set');
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure(error.message));
        }
      );
  };

  function success(user) {
    return {type: constants.SET_USER_GOAL_SUCCESS, user}
  }

  function request(user) {
    return {type: constants.SET_CURRENT_USER_REQUEST, user}
  }

  function failure(message) {
    return {type: constants.SET_USER_GOAL_FAILURE, message}
  }
}

function getUserParameters(userId, fromDate, toDate) {
  return dispatch => {
    dispatch(request(userId));

    userService.getUserParameters(userId, fromDate, toDate)
      .then(
        response => {

          dispatch(success(response.data));
        },
        error => {
          dispatch(failure(error.message));
        }
      );
  };

  function success(userParameters) {
    return {type: constants.GET_USER_PARAMETERS_SUCCESS, userParameters}
  }

  function request(userId) {
    return {type: constants.GET_USER_PARAMETERS_REQUEST, userId}
  }

  function failure(message) {
    return {type: constants.GET_USER_PARAMETERS_FAILURE, message}
  }
}

function showModal(modal, props) {

  return dispatch => {
    dispatch(success(modal, props));
  };

  function success() {
    return show(modal, props)
  }
}