import * as axios from 'axios';

export const userService = {
    getByLogin,
    getAll,
    addUser,
    deleteUser,
    updateUser,
    setGoal,
    getUserParameters
}

function getByLogin(login) {
    return axios.get(`http://localhost:8080/api/v1/users/login/${login}`);
}

function getAll() {
    return axios.get('http://localhost:8080/api/v1/users');
}

function deleteUser(id) {
    return axios.delete('http://localhost:8080/api/v1/users/' + id);
}

function addUser(user) {
    return axios.post('http://localhost:8080/api/v1/users', {...user});
}

function updateUser(user) {
    return axios.put('http://localhost:8080/api/v1/users/' + user.id, {...user});
}

function setGoal(userId, templateId) {
    return axios.post(`http://localhost:8080/api/v1/users/${userId}/goal`);
}

function getUserParameters(userId, fromDate, toDate) {
    return axios.get(`http://localhost:8080/api/v1/users/${userId}/parameters?from=${fromDate}&to=${toDate}`);
}
