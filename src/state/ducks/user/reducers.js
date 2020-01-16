import * as types from "./types"

const initialState = {
  loading: false,
  error: false,
  users: false,
  userParameters: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_GET_ALL_REQUEST:
      return {
        loading: true,
        error: false,
        users: false
      };
    case types.USERS_GET_ALL_SUCCESS:
      return {
        loading: false,
        error: false,
        users: action.users
      };
    case types.USERS_GET_ALL_FAILURE:
      return {
        error: true,
        loading: false,
        users: false
      };

    case types.USER_DELETE_REQUEST:
      return {
        loading: true,
        error: false,
        users: state.users
      }
    case types.USER_DELETE_SUCCESS:
      return {
        loading: false,
        error: false,
        users: state.users.filter(user => user.id !== action.id)
      }
    case types.USER_DELETE_FAILURE:
      return {
        error: true,
        loading: false
      }

    case types.USER_ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case types.USER_ADD_SUCCESS:
      return {
        ...state,
        users: state.users.concat(action.user),
        loading: false,
        error: false
      }
    case types.USER_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    case types.USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };
    case types.USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    case types.GET_USER_PARAMETERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.GET_USER_PARAMETERS_SUCCESS:
      return {
        ...state,
        userParameters: action.userParameters,
        loading: false,
        error: false
      };
    case types.GET_USER_PARAMETERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}

export default userReducer;