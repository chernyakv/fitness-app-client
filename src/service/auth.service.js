import * as axios from 'axios';

export const authService = {
    login,
    logout
}

function login(login, password) {
    return axios.post('http://localhost:8080/auth/login', {
        login,
        password
    })
    .then(response => {        
        localStorage.setItem('jwt', response.data);        
    });
}

function logout() {
    localStorage.removeItem('jwt'); 
}