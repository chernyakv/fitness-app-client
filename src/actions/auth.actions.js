import { authService } from "../service/auth.service";
import { constants } from "../constants/constants";
import { history } from "../helpers/History"

export const authActions = {
    register,
    login,
    logout
};

function register(login, password) {
    return dispatch => {
        dispatch(request({ login }));        

        authService.register(login, password)
            .then(                
                response => {                               
                    dispatch(success(response.data));                    
                },
                error => {
                    alert(error.response.data.message);
                }
            );
    };

    function request(user) { return { type: constants.REGISTER_REQUEST, user } }
    function success(user) { return { type: constants.REGISTER_SUCCESS, user } }   
}

function login(login, password) {
    return dispatch => {
        dispatch(request({ login }));        

        authService.login(login, password)
            .then(                
                response => {                   
                    localStorage.setItem('jwt', JSON.stringify(response.data));  
                    history.push("/");                                            
                    dispatch(success(response.data));                    
                },
                error => {
                    alert(error.response.data.message);
                }
            );
    };

    function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }   
}

function logout() {
    authService.logout();
    history.push("/"); 
    return { type: constants.LOGOUT }
}

 