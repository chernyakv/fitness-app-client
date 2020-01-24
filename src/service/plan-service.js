import instance from "./instance";

export const planService = {
    getById,
    updatePlan,
    getActivitiesForDay,


}
function getById(userId) {
    return instance.get(`plans/u/${userId}`);
}
function getActivitiesForDay(planId) {
    return instance.get(`plans/${planId}`);
}

function updatePlan(id , plan) {
    return instance.put(`plans/${id}`, {...plan});
}



