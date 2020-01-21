import * as types from "./types"
import goalReducer from "../goal";

const initialState = {
    loading: false,
    plan: false,
    error: false

};
const planReducer=(state = initialState, action) => {
    switch (action.type) {
        case types.SET_PLAN_ACTIVITIES_REQUEST:
            return {
                loading: true,
                error: false,
                plan: false
            };
        case types.SET_PLAN_ACTIVITIES_SUCCESS:
            return {
                loading: false,
                error: false,
                plan: action.plan
            };
        case types.SET_PLAN_ACTIVITIES_FAILURE:
            return {
                error: true,
                loading: false,
                plan: false
            };

        case types.ADD_PLAN_ACTIVITIES_REQUEST:
            return {
                loading: true,
                error: false,
                plan: state.plan
            };
        case types.ADD_PLAN_ACTIVITIES_SUCCESS:
            return {
                loading: false,
                error: false,
                plan: state.plan ? state.plan.concat(action.activity) : [action.activity]
            };
        case types.ADD_PLAN_ACTIVITIES_FAILURE:
            return {
                ...state,
                loading: false,
                plan: false
            };

        case types.REMOVE_ACTIVITY_REQUEST:
            return {
                loading: true,
                error: false,
                plan: state.plan
            };
        case types.REMOVE_ACTIVITY_SUCCESS:
            return {
                loading: false,
                error: false,
                plan: state.plan.filter(activity => activity.id !== action.activityId)
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
                plan: state.plan.map(activity => activity.id !== action.activity.id ? activity : action.activity),
                loading: false,
                error: false
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
            return {
                ...state,
                plan: action.plan,
                loading: false,
                error: false
            }
        case types.GET_TODAY_ACTIVITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }


        default:
            return state;
    }
}
export default goalReducer;