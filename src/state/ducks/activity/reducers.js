import * as types from "./types"

const initialState = {
  loading: false,
  error: false,
  todayActivities: false,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODAY_PLAN_REQUEST:
      return {
        loading: true,
        error: false,
        todayActivities: false
      };
    case types.GET_TODAY_PLAN_SUCCESS:
      return {
        loading: false,
        error: false,
        todayExercise: action.activities
      };
    case types.GET_TODAY_PLAN_FAILURE:
      return {
        error: true,
        loading: false,
        todayActivities: false
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
        todayActivities: action.activities
      };
    case types.UPDATE_PLAN_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default exerciseReducer;