import instance from "./instance";

export const activityService = {
    updateActivity,

    getTodayActivities
};

function getTodayActivities(planId) {
    return instance.get(`/activities?planId=${planId}/today`);
}

function updateActivity(activityId, activity) {

    return instance.put(`/activities/${activityId}`, {...activity});
}
