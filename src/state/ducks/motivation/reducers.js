import * as types from "./types"

const initialState = {
  loading: false,
  motivations: false,
  error: false
};
const motivationReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.ADD_MOTIVATION_ITEM_REQUEST:
      return {
        loading: true,
        error: false,
        motivations: state.motivations
      };
    case types.ADD_MOTIVATION_ITEM_SUCCESS:
      return {
        loading: false,
        error: false,
        motivations: {
          ...state.motivations,
          motivationItems: state.motivations.motivationItems ? state.motivations.motivationItems.concat(action.motivationItem) : [action.motivationItem]
        },

      };
    case types.ADD_MOTIVATION_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        motivations: false
      };
    case types.GET_USER_MOTIVATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.GET_USER_MOTIVATION_SUCCESS:

      return {
        ...state,
        motivations: action.motivation,
        loading: false,
        error: false
      };
    case types.GET_USER_MOTIVATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    case types.REMOVE_MOTIVATION_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        motivations: state.motivations
      };
    case types.REMOVE_MOTIVATION_ITEM_SUCCESS:

      return {
        loading: false,
        error: false,
        motivations: {
          ...state.motivations,
          motivationItems: state.motivations.motivationItems.filter(motivationItem => motivationItem.id !== action.motivationItemId)
        },
      };
    case types.REMOVE_MOTIVATION_ITEM_FAILURE:
      return {
        error: true,
        loading: false,
      };

    case types.UPDATE_MOTIVATION_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };

    case types.UPDATE_MOTIVATION_ITEM_SUCCESS:
      console.log("action - updateMotivationItem");
      console.log(action);
      console.log("state - updateMotivationItem");
      console.log(state);

      return {
        ...state,
        loading: false,
        error: false,

        motivations: {
          ...state.motivations,
          motivationItems: state.motivations.motivationItems.map(motivationItem =>
            motivationItem.id === action.motivationItemId ? {
              ...motivationItem,
              newsItems: motivationItem.newsItems.push(action.newsItem)
            } : motivationItem)
        }

      };
    case types.UPDATE_MOTIVATION_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
export default motivationReducer;