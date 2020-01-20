import * as axios from 'axios';
import instance from "./instance";

export const planService = {
    getById,
    updateActivities: updatePlanActivities,
    getPlan,
    removeActivity,
    addPlanActivity: addActivity
}
function getById(userId) {
    return instance.get(`plan/u/${userId}`);
}
function getPlan(planId) {
    return instance.get(`plan/${planId}/activities`);
}
function addActivity(activity) {
    return instance.post(`plan/activities`, {...activity});
}
function updatePlanActivities(id , activity) {
    return instance.put(`plan/activities/${id}`, {...activity});
}
function removeActivity(activityId) {
    return instance.delete(`plan/activities/${activityId}`);
}
