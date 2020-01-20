import * as axios from 'axios';
import instance from "./instance";

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
    return instance.get(`users/login/${login}`);
}

function getAll() {
    return instance.get('users');
}

function deleteUser(id) {
    return instance.delete('users/' + id);
}

function addUser(user) {
    return instance.post('users', {...user});
}

function updateUser(user) {
    return instance.put('users/' + user.id, {...user});
}

function setGoal(userId, templateId) {
    return instance.post(`users/${userId}/goal`);
}

function getUserParameters(userId, fromDate, toDate) {
    return instance.get(`users/${userId}/parameters?from=${fromDate}&to=${toDate}`);
}
