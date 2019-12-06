import { constants } from "../../constants/constants";
import { userService } from "../../service/user.service";
import { usersActions } from "../../actions/users.actions";


const initialState =  {
    users: []
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {  
        case constants.USERS_GET_ALL:
            return {                
                users: action.users
            }; 
        case constants.USER_DELETE_SUCCESS:
            return  {
                users: state.users.filter(user => user.id != action.id)
            }
                
        default:
            return state;
    } 
}