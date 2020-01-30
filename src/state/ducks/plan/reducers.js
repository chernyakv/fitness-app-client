import * as types from "./types"
import moment from 'moment';

const initialState = {
  loading: false,
  plans: false,
  error: false,
  date: moment().format('YYYY-MM-DD')
};
const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PLAN_ACTIVITIES_REQUEST:
      return {
        loading: true,
        error: false,
        plans: false
      };
    case types.SET_PLAN_ACTIVITIES_SUCCESS:
      return {
        loading: false,
        error: false,
        plans: action.plans,
        date: action.date
      };
    case types.SET_PLAN_ACTIVITIES_FAILURE:
      return {
        error: true,
        loading: false,
        plans: false
      };

    case types.ADD_PLAN_ACTIVITIES_REQUEST:
      return {
        loading: true,
        error: false,
        plans: state.plans
      };
    case types.ADD_PLAN_ACTIVITIES_SUCCESS:
      return {
        loading: false,
        error: false,
        plans: state.plans ? state.plans.concat(action.activity) : [action.activity],
        date: state.date
      };
    case types.ADD_PLAN_ACTIVITIES_FAILURE:
      return {
        ...state,
        loading: false,
        plans: false
      };

    case types.REMOVE_ACTIVITY_REQUEST:
      return {
        loading: true,
        error: false,
        plans: state.plans
      };
    case types.REMOVE_ACTIVITY_SUCCESS:
      return {
        loading: false,
        error: false,
        plans: state.plans.filter(activity => activity.id !== action.activityId)
      };
    case types.REMOVE_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false,
      };

    case types.UPDATE_USER_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case types.UPDATE_USER_PLAN_SUCCESS:
      return {
        ...state,
        plans: state.plans.map(activity => activity.id !== action.activity.id ? activity : action.activity),
        loading: false,
        error: false,
        date: state.date
      }
    case types.UPDATE_USER_PLAN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }


    case types.GET_TODAY_ACTIVITIES_REQUEST:


      return {
        ...state,
        loading: true,
        error: false
      }
    case types.GET_TODAY_ACTIVITIES_SUCCESS:
      console.log("GET_TODAY_ACTIVITIES_SUCCESS");
      console.log(action);

      return {
        ...state,
        date: action.plan.date,
        plans: action.plan.planId,
        loading: false,
        error: false
      }
    case types.GET_TODAY_ACTIVITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    case types.GET_USER_PLAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case types.GET_USER_PLAN_SUCCESS:
      return {
        ...state,
        userId: action.plan.userId,
        plans: action.plan,
        activities: action.plan.activities,
        loading: false,
        error: false
      }
    case types.GET_USER_PLAN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state;
  }
}
export default planReducer;