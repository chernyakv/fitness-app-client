import instance from "./instance";

export const activityService = {
    updateActivity
};

function updateActivity(activityId, activity) {
    return instance.put(`plans/activities/${activityId}`, {...activity});
}
