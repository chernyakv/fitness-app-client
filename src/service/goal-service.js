import * as axios from 'axios';
import instance from "./instance";

export const goalService = {
    addGoal,
    updateGoal,
    removeGoal,
    getById,
    getTodayExercise,
    getTodayActivities,
    updateExercise
}

function getById(userId) {
    return instance.get(`goals/u/${userId}`);
}

function addGoal(goal) {
    return instance.post(`goals`, {...goal});
}

function updateGoal(id, goal) {
    return instance.put(`goals/${id}`, {...goal});
}

function removeGoal(goalId) {
    return instance.delete(`goals/${goalId}`);
}

function getTodayExercise(goalId) {
    return instance.get(`goals/${goalId}/exercise`);
}

function getTodayActivities(goalId) {
    return instance.get(`goals/${goalId}/activities`);
}

function updateExercise(exerciseId, exercise) {
    return instance.put(`goals/${exerciseId}/exercise/${exerciseId}`, {...exercise});
}

