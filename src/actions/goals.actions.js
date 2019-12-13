import { constants } from "../constants/constants";
import { goalService } from "../service/goal.service";
import { createNotification } from "../helpers/helpers"

export const goalsActions = {
   setUserGoals,
   addUserGoal
};

function setUserGoals(id) {
    return dispatch => {    
        dispatch(request())

        goalService.getById(id)
            .then(                
                response => {                                           
                    dispatch(success(response.data));                    
                },
                error => {
                    debugger;
                    dispatch(failure());
                }                
            );
    };

    function request() { return { type: constants.SET_USER_GOALS_REQUEST } }
    function success(goals) { return { type: constants.SET_USER_GOALS_SUCCESS, goals } }
    function failure() { return { type: constants.SET_USER_GOALS_FAILURE } }
}

function addUserGoal(goal) {
    return dispatch => {    
        dispatch(request())

        goalService.addTask(goal)
            .then(                
                response => {
                    createNotification('success', 'Goal has been added');                          
                    dispatch(success(response.data));                    
                },
                error => {
                    debugger;
                    dispatch(failure());
                }                
            );
    };

    function request() { return { type: constants.ADD_USER_GOAL_REQUEST } }
    function success(goal) { return { type: constants.ADD_USER_GOAL_SUCCESS, goal } }
    function failure() { return { type: constants.ADD_USER_GOAL_FAILURE } }
}