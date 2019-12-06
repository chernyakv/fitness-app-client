import * as axios from 'axios';

export const userService = {
    getAll,
    deleteUser
}

function getAll() {
    return axios.get('http://localhost:8080/api/v1/users');
      
}

function deleteUser(id) {
    return axios.delete('http://localhost:8080/api/v1/users/' + id);        
}