import * as axios from 'axios';
export const planService = {
    updateActivities,
    getDailyActivities,
    removeActivity,
    addActivity
}
function getDailyActivities(planId) {
    return axios.get(`http://localhost:8080/api/v1/plan/${planId}/activities`);
}
function addActivity(activity) {
    return axios.post(`http://localhost:8080/api/v1/plan/activities`, {...activity});
}
function updateActivities(id ,plan) {
    return axios.put(`http://localhost:8080/api/v1/plan/${id}`, {...plan});
}
function removeActivity(activityId) {
    return axios.delete(`http://localhost:8080/api/v1/goals/${activityId}`);
}
