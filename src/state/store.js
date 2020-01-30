import * as reducers from "./ducks"
import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from 'redux-thunk';
import {reducer as modal} from 'redux-modal'

let rootReducer = combineReducers({
  ...reducers,
  form: formReducer,
  modal
});


let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
)
// export default createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware
//     )
// )
window.store = store;
export default store;
