import * as types from "./types"
import {motivationItemService} from "../../../service/motivation_item_service";
import {createNotification} from "../../../helpers/helpers";
import {motivationsService} from "../../../service/motivation-service";


const addNewsItem = (motivationItemId, newsItem) => {
  return async dispatch => {
    console.log("DEBUG - updateMotivationNewsItem");
    dispatch(request());
    try {
      const response = await motivationItemService.addNewsItem(motivationItemId, newsItem);
      console.log("DEBUG - SUCCESS");
      dispatch(success(motivationItemId, response.data));
    } catch (e) {
      console.log("DEBUG - ERROR");
      dispatch(failure());
      createNotification('error', e);
    }
  };

  function request() {
    return {type: types.ADD_NEWS_ITEM_REQUEST}
  }

  function success(motivationItemId, newsItem) {
    return {type: types.ADD_NEWS_ITEM_SUCCESS, motivationItemId, newsItem}
  }

  function failure() {
    return {type: types.ADD_NEWS_ITEM_FAILURE}
  }
};
function getMotivationItem(motivationItemId) {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await motivationsService.getMotivationItem(motivationItemId);
      dispatch(success(response.data));
    } catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return {type: types.GET_MOTIVATION_ITEM_REQUEST}
  }

  function success(motivationItem) {
    return {type: types.GET_MOTIVATION_ITEM_SUCCESS, motivationItem}
  }

  function failure() {
    return {type: types.GET_MOTIVATION_ITEM_FAILURE}
  }
}
export const motivationItemActions = {
  getMotivationItem,
  addNewsItem
};