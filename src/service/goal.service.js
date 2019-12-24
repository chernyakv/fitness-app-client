import * as axios from 'axios';


export const goalService = {
    addGoal,
    updateGoal,
    removeGoal,
    getById
}

function getById(userId) {
    return axios.get(`http://localhost:8080/api/v1/goals/u/${userId}`);
}

function addGoal(goal) {
    return axios.post(`http://localhost:8080/api/v1/goals`, {...goal});
}


function updateGoal(id, goal) {
    return axios.put(`http://localhost:8080/api/v1/goals/${id}`, {...goal});
}

function removeGoal(goalId) {
    return axios.delete(`http://localhost:8080/api/v1/goals/${goalId}`);
}