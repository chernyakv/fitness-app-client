import * as axios from 'axios';


export const userService = {
    getByLogin,
    getAll,
    addUser,
    deleteUser,
    updateUser
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


