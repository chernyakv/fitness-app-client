import * as types from "./types"

const initialState = {
  loading: false,
  motivationItem: false,
  error: false
};
const motivationItemReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.ADD_NEWS_ITEM_REQUEST:
      return {
        loading: true,
        error: false,
        motivationItem: state.motivationItem
      };
    case types.ADD_NEWS_ITEM_SUCCESS:

      return {
        ...state,
        loading: false,
        error: false,
        motivationItem: {
          ...state.motivationItem,
          newsItems: state.motivationItem.newsItems ? state.motivationItem.newsItems.concat(action.newsItem) : [action.newsItem]
        },

      };
    case types.ADD_NEWS_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        motivationItem: false
      };
    case types.GET_MOTIVATION_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.GET_MOTIVATION_ITEM_SUCCESS:
      return {
        ...state,
        motivationItem: action.motivationItem,
        loading: false,
        error: false
      };
    case types.GET_MOTIVATION_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};
export default motivationItemReducer;