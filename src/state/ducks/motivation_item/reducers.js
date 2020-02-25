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
        news: state.news
      };
    case types.ADD_NEWS_ITEM_SUCCESS:
      console.log("action - updateMotivationNewsItem");
      console.log(action);
      console.log("state - updateMotivationNewsItem");
      console.log(state);
      return {
        ...state,
        loading: false,
        error: false,
        news: state.news ? state.news.concat(action.newsItem) : [action.newsItem]
      };
    case types.ADD_NEWS_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        motivations: false
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
        news: {
          ...state.news,
          motivationItem:  action.motivationItem
        },
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