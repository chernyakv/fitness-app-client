
import { constants } from "../constants/constants";
import { userService } from "../service/user.service";
import { show } from 'redux-modal';

export const usersActions = {
    getAll,
    deleteUser,
    showModa
};

function getAll(login, password) {
    return dispatch => {      

        userService.getAll()
            .then(                
                response => {                            
                    dispatch(success(response.data));                    
                }
            );
    };

    function success(users) { return { type: constants.USERS_GET_ALL, users } }
}

function deleteUser(id) {
    return dispatch => {    
        dispatch(request(id));  

        userService.deleteUser(id)
            .then(                
                response => {                            
                    dispatch(success(id));                    
                },
                error => {
                    dispatch(failure(id));
                }                
            );
    };
    
    function success(id) { return { type: constants.USER_DELETE_SUCCESS, id} }
    function request(id) { return { type: constants.USER_DELETE_REQUEST, id } }
    function failure(id) { return { type: constants.USER_DELETE_FAILURE, id } }
}


function showModa(modal, props) {
    debugger;
    return dispatch => {    
        debugger;
        dispatch(success());  
    };
    
    function success() { return show(modal, props) }
}