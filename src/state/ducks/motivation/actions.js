import * as types from "./types"
import {motivationsService} from "../../../service/motivation-service";
import {createNotification} from "../../../helpers/helpers";
import {planService} from "../../../service/plan-service";

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

const addMotivationItem = (motivationId, motivationItem) => {
  return async dispatch => {
    dispatch(request());
    const response = await motivationsService.addMotivationItem(motivationId, motivationItem);

    try {
      dispatch(success(response.data));

    } catch (e) {
      dispatch(failure());
      createNotification('error', e.response.data.message);
    }
  };

  function request() {
    return {type: types.ADD_MOTIVATION_ITEM_REQUEST}
  }

  function success(motivationItem) {
    return {type: types.ADD_MOTIVATION_ITEM_SUCCESS, motivationItem}
  }

  function failure() {
    return {type: types.ADD_MOTIVATION_ITEM_FAILURE}
  }
};
function removeMotivationItem( motivationItemId) {
  return dispatch => {
    dispatch(request());
    motivationsService.removeMotivationItem(motivationItemId)
      .then(
        response => {
          createNotification('success', 'Motivation item has been deleted');
          dispatch(success(motivationItemId));
        },
        error => {
          dispatch(failure());
        }
      );
  };

  function request() {
    return {type: types.REMOVE_MOTIVATION_ITEM_REQUEST}
  }

  function success(motivationItemId) {
    return {type: types.REMOVE_MOTIVATION_ITEM_SUCCESS, motivationItemId}
  }

  function failure() {
    return {type: types.REMOVE_MOTIVATION_ITEM_FAILURE}
  }
}
const updateMotivationItem = (motivationItemId, newsItem) => {
  return async dispatch => {
    console.log("DEBUG - updateMotivationItem");
    dispatch(request());
    try {
      const response = await motivationsService.updateMotivationItem(motivationItemId, newsItem);
      console.log("DEBUG - SUCCESS");
      dispatch(success(motivationItemId,response.data));
    } catch (e) {
      console.log("DEBUG - ERROR");
      dispatch(failure());
      createNotification('error', e);
    }
  };

  function request() {
    return {type: types.UPDATE_MOTIVATION_ITEM_REQUEST}
  }

  function success(motivationItemId,newsItem) {
    return {type: types.UPDATE_MOTIVATION_ITEM_SUCCESS,motivationItemId, newsItem}
  }

  function failure() {
    return {type: types.UPDATE_MOTIVATION_ITEM_FAILURE}
  }
};
export const motivationActions = {
  getMotivationByUserId,
  addMotivationItem,
  removeMotivationItem,
  updateMotivationItem
};