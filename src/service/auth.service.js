import * as axios from 'axios';
import jwt_decode from 'jwt-decode';

export const authService = {
    register,
    login,
    logout
}

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
    });
}

function logout() {
    const user = jwt_decode(JSON.parse(localStorage.getItem('jwt')).accessToken);
    debugger;
    localStorage.removeItem('jwt'); 
}

