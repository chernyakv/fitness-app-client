import instance from "./instance";

export const activityService = {
    updateActivity,
    getTodayActivities
};

function getTodayActivities(planId, date) {
    return instance.get(`plans/activities?planId=${planId}/${date}`);
}

function updateActivity(activityId, activity) {

    return instance.put(`plans/activities/${activityId}`, {...activity});
}
