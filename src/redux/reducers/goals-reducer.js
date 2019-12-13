import { constants } from "../../constants/constants";

const initialState = {
    loading: false,
    error: false,
    goals: false
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
            debugger;
            return {
                loading: false,
                error: false,
                goals: state.goals.concat(action.goal),
            };
        case constants.ADD_USER_GOAL_FAILURE:
            return {
                ...state,
                loading: false,
                goals: false
            };
        default:
            return state;
    }
}