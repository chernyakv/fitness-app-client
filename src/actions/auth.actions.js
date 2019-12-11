import { authService } from "../service/auth.service";
import { constants } from "../constants/constants";
import { history } from "../helpers/History"
import jwt_decode from 'jwt-decode';

export const authActions = {
    register,
    login,
    logout,
    resetPassword
};

function register(login, password) {
    return dispatch => {
        dispatch(request({ login }));        

        authService.register(login, password)
            .then(                
                response => {  
                    history.push("/login");                               
                    dispatch(success(response.data));                    
                },
                error => {
                    alert(error.message);
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
                    const user = jwt_decode(response.data.accessToken);
                    dispatch(success(user));
                    history.push("/");                                            
                                        
                },
                error => {
                    alert(error.response.data.message);
                }
            );
    };

    function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }   
}

function resetPassword(password, newPassword) {
    return dispatch => {
        dispatch(request());        

        authService.resetPassword(password, newPassword)
            .then(                
                response => {    
                    dispatch(success());
                    history.push("/");                                            
                                        
                },
                error => {
                    alert(error.message);
                }
            );
    };

    function request() { return { type: constants.RESET_PASS_REQUEST } }
    function success() { return { type: constants.RESET_PASS_SUCCESS } }   
}

function logout() {
    authService.logout();
    history.push("/"); 
    return { type: constants.LOGOUT }
}

 