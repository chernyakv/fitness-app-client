import instance from "./instance";

export const planService = {
  getByUserId,
  updatePlan,
  getActivitiesForDay,
  getByUserIdAndDate

}

function getByUserId(userId) {
  return instance.get(`plans/u/${userId}`);
}

function getByUserIdAndDate(userId, date) {
  return instance.get(`plans/u/${userId}/${date}`)
}

function getActivitiesForDay(planId) {
  return instance.get(`plans/${planId}/activities`);
}

function updatePlan(id, plan) {
  return instance.put(`plans/${id}`, {...plan});
}



