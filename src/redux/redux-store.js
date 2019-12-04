import { createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as formReducer} from "redux-form";
import { authReducer } from "./reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    auth: authReducer,
    form: formReducer
});


let store =  createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;
window.store = store;