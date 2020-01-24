import * as types from "./types"
import {activityService} from "../../../service/activity-service";
import {createNotification} from "../../../helpers/helpers";

const getTodayActivities = (planId, date) => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await activityService.getTodayActivities(planId, date);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
      createNotification('error', e.response.data.message);
    }
  };

  function request() {
    return {type: types.GET_TODAY_PLAN_REQUEST}
  }

  function success(activity) {
    return {type: types.GET_TODAY_PLAN_SUCCESS, activity}
  }

  function failure() {
    return {type: types.GET_TODAY_PLAN_FAILURE}
  }
};

const updateActivity = (id, activity) => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await activityService.updateActivity(id, activity);
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

export const activityActions = {
  getTodayActivities,
  updateActivity
};