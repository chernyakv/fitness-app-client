import * as types from "./types"

const initialState = {
  loading: false,
  error: false,
  activity: false,
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODAY_PLAN_REQUEST:
      return {
        loading: true,
        error: false,
        activity: false
      };
    case types.GET_TODAY_PLAN_SUCCESS:
      return {
        loading: false,
        error: false,
        activity: action.activities
      };
    case types.GET_TODAY_PLAN_FAILURE:
      return {
        error: true,
        loading: false,
        activity: false
      };

    case types.UPDATE_PLAN_ACTIVITY_REQUEST:
      return {
        loading: true,
        error: false
      };
    case types.UPDATE_PLAN_ACTIVITY_SUCCESS:
      return {
        loading: false,
        error: false,
        activity: action.activity
      };
    case types.UPDATE_PLAN_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false
      };
    case types.GET_ACTIVITY_REQUEST:
      return {
        loading: true,
        error: false
      };
    case types.GET_ACTIVITY_SUCCESS:
      return {
        loading: false,
        error: false,
        activity: action.activity
      };
    case types.GET_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false
      };

    default:
      return state;
  }
};

export default activityReducer;