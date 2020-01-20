export const authHeader = () => {
    let accessToken = JSON.parse(localStorage.getItem('jwt')).accessToken
    if (accessToken) {
        return { 'Authorization': 'Bearer ' + accessToken };
    } else {
        return {};
    }
}