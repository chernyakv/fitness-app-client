import instance from "./instance";

export const activityService = {
    updateActivity,
    getTodayActivities,
    getActivity
};

function getTodayActivities(planId) {
    return instance.get(`plans/activities?planId=${planId}}`);
}

function updateActivity(activityId, activity) {

    return instance.put(`plans/activities/${activityId}`, {...activity});
}
function getActivity(activityId) {
    return instance.get(`plans/activities?activityId=${activityId}}`);
}