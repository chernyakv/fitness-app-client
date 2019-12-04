import { authService } from "../service/auth.service";
import { constants } from "../constants/constants";



export const authActions = {
    login,
    logout
};

function login(login, password) {
    return dispatch => {
        dispatch(request({ login }));
        debugger;

        authService.login(login, password)
            .then(
                response => {           
                    dispatch(success(response.data));
                },
                error => {
                    debugger;
                    alert(error.response.data.message);
                }
            );
    };

    function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
}

function logout() {
    authService.logout();
    return { type: constants.LOGOUT }
}

 