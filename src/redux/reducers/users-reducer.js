import { constants } from "../../constants/constants";

const initialState =  {
    loading: false,
    error: false,
    users: false
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {  
        case constants.USERS_GET_ALL_REQUEST:
            return {    
                loading: true,
                error: false,
                users: false    
            }; 
        case constants.USERS_GET_ALL_SUCCESS:
            return {           
                loading: false, 
                error: false,    
                users: action.users
            }; 
        case constants.USERS_GET_ALL_FAILURE:
            return {   
                error: true,
                loading: false, 
                users: false
            }; 

        case constants.USER_DELETE_REQUEST:
            return  {
                loading: true,
                error: false,
                users: state.users                
            }
        case constants.USER_DELETE_SUCCESS:
            return  {
                loading: false,
                error: false,
                users: state.users.filter(user => user.id != action.id)
            }
        case constants.USER_DELETE_FAILURE:
            return  {
                error: true,
                loading: false
            }   
            
        case constants.USER_ADD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case constants.USER_ADD_SUCCESS:   
            return {
                ...state,
                users: state.users.concat(action.user),           
                loading: false,
                error: false
            }
        case constants.USER_ADD_REQUEST:
            return {
                ...state,
                loading: false,
                error: true
            }  
            
        case constants.USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case constants.USER_UPDATE_SUCCESS:   
            return {
                ...state,          
                loading: false,
                error: false
            }
        case constants.USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: false,
                error: true
            }    
        default:
            return state;
    } 
}