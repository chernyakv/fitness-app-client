import * as types from "./types"

const initialState = {
  loading: false,
  error: false,
  goals: false,
  activities: false,

};

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_GOALS_REQUEST:
      return {
        loading: true,
        error: false,
        goals: false
      };
    case types.SET_USER_GOALS_SUCCESS:
      return {
        loading: false,
        error: false,
        goals: action.goals
      };
    case types.SET_USER_GOALS_FAILURE:
      return {
        error: true,
        loading: false,
        goals: false
      };

    case types.ADD_USER_GOAL_REQUEST:
      return {
        loading: true,
        error: false,
        goals: state.goals
      };
    case types.ADD_USER_GOAL_SUCCESS:
      return {
        loading: false,
        error: false,
        goals: state.goals ? state.goals.concat(action.goal) : [action.goal]
      };
    case types.ADD_USER_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        goals: false
      };

    case types.REMOVE_GOAL_REQUEST:
      return {
        loading: true,
        error: false,
        goals: state.goals
      };
    case types.REMOVE_GOAL_SUCCESS:
      return {
        loading: false,
        error: false,
        goals: state.goals.filter(goal => goal.id !== action.goalId)
      };
    case types.REMOVE_GOAL_FAILURE:
      return {
        error: true,
        loading: false,
      };

    case types.UPDATE_USER_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.UPDATE_USER_GOAL_SUCCESS:
      return {
        ...state,
        goals: state.goals.map(goal => goal.id !== action.goal.id ? goal : action.goal),
        loading: false,
        error: false
      };
    case types.UPDATE_USER_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };


    case types.UPDATE_GOAL_EXERCISE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.UPDATE_GOAL_EXERCISE_SUCCESS:
      return {
        ...state,
        exercise: action.exercise,
        loading: false,
        error: false
      };
    case types.UPDATE_GOAL_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default goalReducer;