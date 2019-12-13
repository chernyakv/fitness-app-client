import { createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as formReducer} from "redux-form";
import { authReducer } from "./reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { usersReducer } from "./reducers/users-reducer";
import { goalsReducer } from "./reducers/goals-reducer";
import { reducer as modal } from 'redux-modal'


let reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    users: usersReducer,
    goals: goalsReducer,
    modal
});


let store =  createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;
window.store = store;