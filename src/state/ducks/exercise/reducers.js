import * as types from "./types"

const initialState = {
  loading: false,
  error: false,
  todayExercise: false,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODAY_EXERCISE_REQUEST:
      return {
        loading: true,
        error: false,
        todayExercise: false
      };
    case types.GET_TODAY_EXERCISE_SUCCESS:
      return {
        loading: false,
        error: false,
        todayExercise: action.exercise
      };
    case types.GET_TODAY_EXERCISE_FAILURE:
      return {
        error: true,
        loading: false,
        todayExercise: false
      };

    case types.UPDATE_EXERCISE_REQUEST:
      return {
        loading: true,
        error: false
      };
    case types.UPDATE_EXERCISE_SUCCESS:
      return {
        loading: false,
        error: false,
        todayExercise: action.exercise
      };
    case types.UPDATE_EXERCISE_FAILURE:
      return {
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default exerciseReducer;