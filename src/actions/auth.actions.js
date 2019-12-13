import { authService } from "../service/auth.service";
import { userService } from "../service/user.service";
import { constants } from "../constants/constants";
import { history } from "../helpers/History"
import { goalsActions } from '../actions/goals.actions'
import jwt_decode from 'jwt-decode';

export const authActions = {
    setCurrentUser,
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
                    debugger;                
                    localStorage.setItem('jwt', JSON.stringify(response.data));  
                    const user = jwt_decode(response.data.accessToken);                    
                    dispatch(success(user.sub));                 
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

function setCurrentUser(login) {
    return dispatch => {
        dispatch(request());    

        userService.getByLogin(login)
            .then(                
                response => {                    
                    dispatch(success(response.data));
                    dispatch(goalsActions.setUserGoals(response.data.id))
                },
                error => {
                    alert(error.message);
                }
            );
    };

    function request() { return { type: constants.SET_CURRENT_USER_REQUEST } }
    function success(user) { return { type: constants.SET_CURRENT_USER_SUCCESS, user }}   
}

function logout() {
    authService.logout();
    history.push("/"); 
    return { type: constants.LOGOUT }
}

 