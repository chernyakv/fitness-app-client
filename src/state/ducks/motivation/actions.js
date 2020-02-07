import * as types from "./types"
import {motivationsService} from "../../../service/motivation-service";

function getMotivationByUserId(userId) {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await motivationsService.getMotivationByUserId(userId);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return {type: types.GET_USER_MOTIVATION_REQUEST}
  }

  function success(motivation) {
    return {type: types.GET_USER_MOTIVATION_SUCCESS, motivation}
  }

  function failure() {
    return {type: types.GET_USER_MOTIVATION_FAILURE}
  }
}

export const motivationActions = {
  getMotivationByUserId
};