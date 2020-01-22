import * as axios from 'axios';
import instance from "./instance";

export const planService = {
    getById,
    updatePlan,
    getPlan,


}
function getById(userId) {
    return instance.get(`plans/u/${userId}`);
}
function getPlan(planId) {
    return instance.get(`plans/${planId}/activities`);
}

function updatePlan(id , plan) {
    return instance.put(`plans/activities/${id}`, {...plan});
}


