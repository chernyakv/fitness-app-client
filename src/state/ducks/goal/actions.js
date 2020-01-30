import * as types from "./types"
import {goalService} from "../../../service/goal-service";
import {createNotification} from "../../../helpers/helpers"

export const goalActions = {
  removeGoal,
  setUserGoals,
  addUserGoal,
  updateUserGoal,
  getTodayActivities
};

function setUserGoals(id, goal) {
  return async dispatch => {
    dispatch(request())
    try {
      const response = await goalService.getById(id);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return {type: types.SET_USER_GOALS_REQUEST}
  }

  function success(goals) {
    return {type: types.SET_USER_GOALS_SUCCESS, goals}
  }

  function failure() {
    return {type: types.SET_USER_GOALS_FAILURE}
  }
}

function addUserGoal(goal) {
  return async dispatch => {
    dispatch(request())
    const response = await goalService.addGoal(goal);
    try {
      createNotification('success', 'Goal has been added');
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return {type: types.ADD_USER_GOAL_REQUEST}
  }

  function success(goal) {
    return {type: types.ADD_USER_GOAL_SUCCESS, goal}
  }

  function failure() {
    return {type: types.ADD_USER_GOAL_FAILURE}
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
    return {type: types.UPDATE_USER_GOAL_REQUEST}
  }

  function success(goal) {
    return {type: types.UPDATE_USER_GOAL_SUCCESS, goal}
  }

  function failure() {
    return {type: types.UPDATE_USER_GOAL_FAILURE}
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
    return {type: types.REMOVE_GOAL_REQUEST}
  }

  function success(goalId) {
    return {type: types.REMOVE_GOAL_SUCCESS, goalId}
  }

  function failure() {
    return {type: types.REMOVE_GOAL_FAILURE}
  }
}

function getTodayActivities(id) {
  return dispatch => {
    dispatch(request())
    goalService.getTodayActivities(id)
      .then(
        response => {
          dispatch(success(response.data));
        },
        error => {
          dispatch(failure(error.message));
        }
      );
  };

  function request() {
    return {type: types.GET_TODAY_ACTIVITIES_REQUEST}
  }

  function success(plan) {
    return {type: types.GET_TODAY_ACTIVITIES_SUCCESS, plan}
  }

  function failure() {
    return {type: types.GET_TODAY_ACTIVITIES_FAILURE}
  }
}