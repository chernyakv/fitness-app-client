import * as types from "./types"

const initialState = {
  loading: false,
  plans: false,
  error: false
};
const planReducer = (state = initialState, action) => {

  switch (action.type) {

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
      };
    case types.ADD_PLAN_ACTIVITIES_FAILURE:
      return {
        ...state,
        loading: false,
        plans: false
      };

    case types.REMOVE_PLAN_ACTIVITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        plans: state.plans
      };
    case types.REMOVE_PLAN_ACTIVITY_SUCCESS:
      return {
        loading: false,
        error: false,
        plans: {
          ...state.plans,
          activities: state.plans.activities.filter(activity => activity.id !== action.activityId)
        },
      };
    case types.REMOVE_PLAN_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false,
      };

    case types.GET_USER_PLAN_FOR_DATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.GET_USER_PLAN_FOR_DATE_SUCCESS:

      return {
        ...state,
        date: action.plan.date,
        activities: action.plan.activities,
        plans: action.plan,
        loading: false,
        error: false
      };
    case types.GET_USER_PLAN_FOR_DATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    case types.UPDATE_PLAN_ACTIVITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.UPDATE_PLAN_ACTIVITY_SUCCESS:
      let act = state.plans.activities.map(activity => activity.id !== action.activity.id ? activity : action.activity);
      act = act.sort(function compare(a, b) {
        if (a.startTime > (b.startTime)) {
          return 1;
        } else if (a.startTime < (b.startTime)) {
          return -1;
        } else {
          return 0;
        }
      });

      console.log(act)
      return {
        loading: false,
        error: false,

        plans: {
          ...state.plans,
          activities: act
        },
      };
    case types.UPDATE_PLAN_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false
      };
    case types.ADD_PLAN_ACTIVITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.ADD_PLAN_ACTIVITY_SUCCESS:
      return {
        loading: false,
        error: false,
        plans: {
          ...state.plans,
          activities: state.plans.activities ? state.plans.activities.concat(action.activity) : [action.activity]
        },
      };
    case types.ADD_PLAN_ACTIVITY_FAILURE:
      return {
        error: true,
        loading: false
      };

    default:
      return state;
  }
};
export default planReducer;