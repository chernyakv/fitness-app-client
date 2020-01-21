import * as types from "./types"
import {planService} from "../../../service/plan-service";
import {createNotification} from "../../../helpers/helpers";



export const planActions = {
    setUserPlan,
    addPlanActivity,
    updatePlanActivities,
    getPlan,
    removeActivity,
};
function setUserPlan(id){
    return async dispatch => {
        dispatch(request());
        try {
            const response = await planService.getById(id);
            dispatch(success(response.data));
        } catch (e) {
            dispatch(failure());
        }
    };
    function request() {
        return {type: types.SET_PLAN_ACTIVITIES_REQUEST}
    }

    function success(plan) {
        return {type: types.SET_PLAN_ACTIVITIES_SUCCESS, plan}
    }

    function failure() {
        return {type: types.SET_PLAN_ACTIVITIES_FAILURE}
    }
}
function addPlanActivity(activity) {
    return async dispatch => {
        dispatch(request());
        const response = await planService.addPlanActivity(activity);
        try {
            createNotification('success', 'Activity has been added');
            dispatch(success(response.data));
        } catch (e) {
            dispatch(failure());
        }
    };
    function request() {
        return {type: types.ADD_PLAN_ACTIVITIES_REQUEST}
    }

    function success(activity) {
        return {type: types.ADD_PLAN_ACTIVITIES_SUCCESS, activity}
    }

    function failure() {
        return {type: types.ADD_PLAN_ACTIVITIES_FAILURE}
    }
}
function updatePlanActivities(id, activity) {
    return dispatch => {
        dispatch(request());
        planService.updateGoal(id, activity)
            .then(
                response => {
                    createNotification('success', 'Activity has been updated');
                    dispatch(success(response.data));
                },
                error => {
                    dispatch(failure());
                }
            );
    };

    function request() {
        return {type: types.UPDATE_PLAN_ACTIVITY_REQUEST}
    }

    function success(activity) {
        return {type: types.UPDATE_PLAN_ACTIVITY_SUCCESS, activity}
    }

    function failure() {
        return {type: types.UPDATE_PLAN_ACTIVITY_FAILURE}
    }
}
function getPlan(id) {
    return dispatch => {
        dispatch(request());
        planService.getPlan(id)
            .then(
                response => {
                    dispatch(success(response.data));
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };

    function request() {
        return {type: types.GET_TODAY_ACTIVITIES_REQUEST}
    }

    function success(activities) {
        return {type: types.GET_TODAY_ACTIVITIES_SUCCESS, activities}
    }

    function failure() {
        return {type: types.GET_TODAY_ACTIVITIES_FAILURE}
    }
}
function removeActivity(activityId) {
    return dispatch => {
        dispatch(request());
        planService.removeActivity(activityId)
            .then(
                response => {
                    createNotification('success', 'Activity has been deleted');
                    dispatch(success(activityId));
                },
                error => {
                    dispatch(failure());
                }
            );
    };

    function request() {
        return {type: types.REMOVE_ACTIVITY_REQUEST}
    }

    function success(activityId) {
        return {type: types.REMOVE_ACTIVITY_SUCCESS, activityId}
    }

    function failure() {
        return {type: types.REMOVE_ACTIVITY_FAILURE}
    }
}