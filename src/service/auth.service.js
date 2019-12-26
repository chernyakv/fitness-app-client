import * as axios from 'axios';
import jwt_decode from 'jwt-decode';
import { authHeader } from '../helpers/authHeader'
import { BehaviorSubject } from 'rxjs';

export const authService = {
    register,
    login,
    logout,
    resetPassword,
    getCurrentUserLogin
}

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('jwt')));

function register(login, password) {
    return axios.post('http://localhost:8080/auth/registration', {
        login,
        password
    });
}

function login(login, password) {
    return axios.post('http://localhost:8080/auth/login', {
        login,
        password
    }).then(
        response => {
            localStorage.setItem('jwt', JSON.stringify(response.data));
            currentUserSubject.next();
            return response;
        }
    );
}

function logout() {
    localStorage.removeItem('jwt');
}

function resetPassword(password, newPassword) {
    return axios.post(`http://localhost:8080/auth/resetPassword?password=${password}&newPassword=${newPassword}`, {}, { headers: authHeader() });
}

function getCurrentUserLogin() {
    if (!currentUserSubject.value) {
        return null;
    }

    return jwt_decode(currentUserSubject.value.accessToken).sub;
}