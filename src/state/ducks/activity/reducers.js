import * as types from "./types"

const initialState = {
  loading: false,
  error: false,
  activity: false,
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {

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
    case types.ADD_PLAN_ACTIVITY_REQUEST:
      return {
        loading: true,
        error: false
      };
    case types.ADD_PLAN_ACTIVITY_SUCCESS:
      return {
        loading: false,
        error: false,
        activity: action.activity
      };
    case types.ADD_PLAN_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false
      };

    default:
      return state;
  }
};

export default activityReducer;