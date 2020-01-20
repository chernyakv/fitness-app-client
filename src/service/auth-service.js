import * as axios from 'axios';
import instance from "./instance";
import jwt_decode from 'jwt-decode';
import { authHeader } from './helpers'
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
    return instance.post('auth/register', {
        login,
        password
    });
}

function login(login, password) {
    return instance.post('auth/login', {
        login,
        password
    }).then(
        response => {
            localStorage.setItem('jwt', JSON.stringify(response.data));
            currentUserSubject.next(false);
            return response;
        }
    );
}

function logout() {
    localStorage.removeItem('jwt');
}

function resetPassword(password, newPassword) {
    return instance.post(`auth/changePassword?password=${password}&newPassword=${newPassword}`, {}, { headers: authHeader() });
}

function getCurrentUserLogin() {
    if (!currentUserSubject.value) {
        return null;
    }

    return jwt_decode(currentUserSubject.value.accessToken).sub;
}