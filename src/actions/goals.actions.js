import {constants} from "../constants/constants";
import {goalService} from "../service/goal.service";
import {createNotification} from "../helpers/helpers"

export const goalsActions = {
  removeGoal,
  setUserGoals,
  addUserGoal,
  updateUserGoal
};

function setUserGoals(id) {
  return dispatch => {
    dispatch(request())
    goalService.getById(id)
      .then(
        response => {
          dispatch(success(response.data));
        },
        error => {
          debugger;
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: constants.SET_USER_GOALS_REQUEST}
  }

  function success(goals) {
    return {type: constants.SET_USER_GOALS_SUCCESS, goals}
  }

  function failure() {
    return {type: constants.SET_USER_GOALS_FAILURE}
  }
}

function addUserGoal(goal) {
  return dispatch => {
    dispatch(request())
    goalService.addGoal(goal)
      .then(
        response => {
          createNotification('success', 'Goal has been added');
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: constants.ADD_USER_GOAL_REQUEST}
  }

  function success(goal) {
    return {type: constants.ADD_USER_GOAL_SUCCESS, goal}
  }

  function failure() {
    return {type: constants.ADD_USER_GOAL_FAILURE}
  }
}

function updateUserGoal(id, goal) {
  return dispatch => {
    dispatch(request())
    goalService.updateGoal(id, goal)
      .then(
        response => {
          createNotification('success', 'Goal has been updated');
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: constants.UPDATE_USER_GOAL_REQUEST}
  }

  function success(goal) {
    return {type: constants.UPDATE_USER_GOAL_SUCCESS, goal}
  }

  function failure() {
    return {type: constants.UPDATE_USER_GOAL_FAILURE}
  }
}

function removeGoal(goalId) {
  return dispatch => {
    dispatch(request())
    goalService.removeGoal(goalId)
      .then(
        response => {
          createNotification('success', 'Goal has been deleted');
          dispatch(success(goalId));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: constants.REMOVE_GOAL_REQUEST}
  }

  function success(goalId) {
    return {type: constants.REMOVE_GOAL_SUCCESS, goalId}
  }

  function failure() {
    return {type: constants.REMOVE_GOAL_FAILURE}
  }
}