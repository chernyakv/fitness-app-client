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
        motivations: state.motivations ? state.motivations.concat(action.motivationItem) : [action.motivationItem],
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


    default:
      return state;
  }
};
export default motivationReducer;