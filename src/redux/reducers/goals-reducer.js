import {constants} from "../../constants/constants";

const initialState = {
  loading: false,
  error: false,
  goals: false,
  exercise: false,
  activities: false
};

export function goalsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_USER_GOALS_REQUEST:
      return {
        loading: true,
        error: false,
        goals: false
      };
    case constants.SET_USER_GOALS_SUCCESS:
      return {
        loading: false,
        error: false,
        goals: action.goals
      };
    case constants.SET_USER_GOALS_FAILURE:
      return {
        error: true,
        loading: false,
        goals: false
      };

    case constants.ADD_USER_GOAL_REQUEST:
      return {
        loading: true,
        error: false,
        goals: state.goals
      };
    case constants.ADD_USER_GOAL_SUCCESS:
      return {
        loading: false,
        error: false,
        goals: state.goals ? state.goals.concat(action.goal) : [action.goal]
      };
    case constants.ADD_USER_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        goals: false
      };

    case constants.REMOVE_GOAL_REQUEST:
      return {
        loading: true,
        error: false,
        goals: state.goals
      };
    case constants.REMOVE_GOAL_SUCCESS:
      return {
        loading: false,
        error: false,
        goals: state.goals.filter(goal => goal.id !== action.goalId)
      };
    case constants.REMOVE_GOAL_FAILURE:
      return {
        error: true,
        loading: false,
      };

    case constants.UPDATE_USER_GOAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case constants.UPDATE_USER_GOAL_SUCCESS:
      return {
        ...state,
        goals: state.goals.map(goal => goal.id !== action.goal.id ? goal : action.goal),
        loading: false,
        error: false
      }
    case constants.UPDATE_USER_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    case constants.GET_TODAY_EXERCISE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case constants.GET_TODAY_EXERCISE_SUCCESS:
      return {
        ...state,
        exercise: action.exercise,
        loading: false,
        error: false
      }
    case constants.GET_TODAY_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    case constants.GET_TODAY_ACTIVITIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case constants.GET_TODAY_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.activities,
        loading: false,
        error: false
      }
    case constants.GET_TODAY_ACTIVITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}