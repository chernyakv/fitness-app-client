export function authHeader() {   
    let accessToken = JSON.parse(localStorage.getItem('jwt')).accessToken
    debugger;
    if (accessToken) {
        return { 'Authorization': 'Bearer ' + accessToken };
    } else {
        return {};
    }
}