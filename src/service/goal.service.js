import * as axios from 'axios';


export const goalService = {
    addTask,
    getById
}

function getById(userId) {
    return axios.get(`http://localhost:8080/api/v1/goals/u/${userId}`);  
}

function addTask(goal) {
    return axios.post(`http://localhost:8080/api/v1/goals`, {...goal});   
}