import * as types from "./types"
import {exerciseService} from "../../../service/exercise-service";
import {createNotification} from "../../../helpers/helpers";

const getExerciseForToday = (goalId) => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await exerciseService.getExerciseForToday(goalId);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
      createNotification('error', e.response.data.message);
    }
  };

  function request() {
    return {type: types.GET_TODAY_EXERCISE_REQUEST}
  }

  function success(exercise) {
    return {type: types.GET_TODAY_EXERCISE_SUCCESS, exercise}
  }

  function failure() {
    return {type: types.GET_TODAY_EXERCISE_FAILURE}
  }
};

const updateExercise = (id, exercise) => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await exerciseService.updateExercise(id, exercise);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
      createNotification('error', e.response.data.message);
    }
  };

  function request() {
    return {type: types.UPDATE_EXERCISE_REQUEST}
  }

  function success(exercise) {
    return {type: types.UPDATE_EXERCISE_SUCCESS, exercise}
  }

  function failure() {
    return {type: types.UPDATE_EXERCISE_FAILURE}
  }
};

export const exerciseActions = {
  getExerciseForToday,
  updateExercise
};