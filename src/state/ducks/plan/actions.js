import * as types from "./types"
import {planService} from "../../../service/plan-service";
import {createNotification} from "../../../helpers/helpers";


function setPlan(plan) {
    return async dispatch => {
        dispatch(request());
        try {
            const response = await planService.setPlan(plan);
            dispatch(success(response.data));
        } catch (e) {
            dispatch(failure());
        }
    };

    function request() {
        return {type: types.SET_PLAN_REQUEST}
    }

    function success(plan) {
        return {type: types.SET_PLAN_SUCCESS, plan}
    }

    function failure() {
        return {type: types.SET_PLAN_FAILURE}
    }
}


function updatePlan(id, activity) {
    return dispatch => {
        dispatch(request());
        planService.updatePlan(id, activity)
            .then(
                response => {
                    createNotification('success', 'Activity has been updated');
                    dispatch(success(response.data));
                },
                error => {
                    dispatch(failure());
                }
            );
    };

    function request() {
        return {type: types.UPDATE_PLAN_REQUEST}
    }

    function success(activity) {
        return {type: types.UPDATE_PLAN_SUCCESS, activity}
    }

    function failure() {
        return {type: types.UPDATE_PLAN_FAILURE}
    }
}

function getActivitiesForDay(id) {
  return dispatch => {
    dispatch(request());
    planService.getActivitiesForDay(id)
      .then(
        response => {
          console.log("getActivitiesForDay");
          console.log(response);
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

    function success(activities) {
        return {type: types.GET_TODAY_ACTIVITIES_SUCCESS, activities}
    }

    function failure() {
        return {type: types.GET_TODAY_ACTIVITIES_FAILURE}
    }
}
function getUserPlan(id) {
  return async dispatch => {
    dispatch(request())
    try {
      const response = await planService.getByUserId(id);
      console.log("getUserPlan");
      console.log(response);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
    }
  };

    function request() {
        return {type: types.GET_USER_PLAN_REQUEST}
    }

    function success(plan) {
        return {type: types.GET_USER_PLAN_SUCCESS, plan}
    }

    function failure() {
        return {type: types.GET_USER_PLAN_FAILURE}
    }
}

function getByUserIdAndDate(userId, date) {
  return async dispatch => {
    dispatch(request());
    try {

      const response = await planService.getByUserIdAndDate(userId, date);
      console.log("getByUserIdAndDate");
      console.log(response);
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
      console.log("updateActivity");
      console.log(activity);
      const response = await planService.updateActivity(activityId, activity);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
      console.log(e)
      //createNotification('error', e.response.data.message);
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
export const planActions = {
  setPlan,
  updatePlan,
  getActivitiesForDay,
  getUserPlan,
  getByUserIdAndDate,
  updateActivity,
  addActivity
};