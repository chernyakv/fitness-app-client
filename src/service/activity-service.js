import instance from "./instance";

export const activityService = {
  updateActivity,
  addActivity
};

function updateActivity(activityId, activity) {

  return instance.put(`plans/activities/${activityId}`, {...activity});
}

function addActivity(planId, activity) {

  return instance.post(`plans/${planId}/activities`, {...activity});
}