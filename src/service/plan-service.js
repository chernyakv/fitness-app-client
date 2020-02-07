import instance from "./instance";

export const planService = {
  getByUserIdAndDate,
  addActivity,
  updateActivity,
  removeActivity

};

function getByUserIdAndDate(userId, date) {
  return instance.get(`plans/u/${userId}/${date}`)
}


function updateActivity(activityId, activity) {

  return instance.put(`plans/activities/${activityId}`, {...activity});
}

function addActivity(planId, activity) {

  return instance.post(`plans/${planId}/activities`, {...activity});
}

function removeActivity(planId, activityId) {
  return instance.delete(`plans/${planId}/activities/${activityId}`);
}



