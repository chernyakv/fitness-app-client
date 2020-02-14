import instance from "./instance";

export const planService = {
  getPlanByUserIdAndDate,
  addActivity,
  updateActivity,
  removeActivity
};

function getPlanByUserIdAndDate(userId, date) {
  return instance.get(`/tasks/plans/u/${userId}/${date}`)
}

function updateActivity(activityId, activity) {
  return instance.put(`/tasks/plans/activities/${activityId}`, {...activity});
}

function addActivity(planId, activity) {
  return instance.post(`/tasks/plans/${planId}/activities`, {...activity});
}

function removeActivity(planId, activityId) {
  return instance.delete(`/tasks/plans/${planId}/activities/${activityId}`);
}



