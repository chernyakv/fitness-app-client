import * as types from "./types"
import {planService} from "../../../service/plan-service";
import {createNotification} from "../../../helpers/helpers";

function getByUserIdAndDate(userId, date) {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await planService.getPlanByUserIdAndDate(userId, date);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return {type: types.GET_USER_PLAN_FOR_DATE_REQUEST}
  }

  function success(plan) {
    return {type: types.GET_USER_PLAN_FOR_DATE_SUCCESS, plan}
  }

  function failure() {
    return {type: types.GET_USER_PLAN_FOR_DATE_FAILURE}
  }
}

const updateActivity = (activityId, activity) => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await planService.updateActivity(activityId, activity);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
      createNotification('error', e.response.data.message);
    }
  };

  function request() {
    return {type: types.UPDATE_PLAN_ACTIVITY_REQUEST}
  }

  function success(activity) {
    return {type: types.UPDATE_PLAN_ACTIVITY_SUCCESS, activity}
  }

  function failure() {
    return {type: types.UPDATE_PLAN_ACTIVITY_FAILURE}
  }
};
const addActivity = (planId, activity) => {
  return async dispatch => {
    dispatch(request());
    const response = await planService.addActivity(planId, activity);
    try {
      console.log("addActivity");
      console.log(activity);

      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
      createNotification('error', e.response.data.message);
    }
  };

  function request() {
    return {type: types.ADD_PLAN_ACTIVITY_REQUEST}
  }

  function success(activity) {
    return {type: types.ADD_PLAN_ACTIVITY_SUCCESS, activity}
  }

  function failure() {
    return {type: types.ADD_PLAN_ACTIVITY_FAILURE}
  }
};

function removeActivity(activityId) {
  return dispatch => {
    dispatch(request());
    planService.removeActivity(activityId)
      .then(
        response => {
          createNotification('success', 'Activity has been deleted');
          dispatch(success(activityId));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: types.REMOVE_PLAN_ACTIVITY_REQUEST}
  }

  function success(activityId) {
    return {type: types.REMOVE_PLAN_ACTIVITY_SUCCESS, activityId}
  }

  function failure() {
    return {type: types.REMOVE_PLAN_ACTIVITY_FAILURE}
  }
}

export const planActions = {
  getByUserIdAndDate,
  removeActivity,
  updateActivity,
  addActivity
};