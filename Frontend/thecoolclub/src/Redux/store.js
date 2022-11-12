

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer.js";
export const store = legacy_createStore(AppReducer, applyMiddleware(thunk));



import { applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import { reducer as AppReducer } from './AppReducer/reducer';
import { reducer as Auth } from './Auth/reducer';

const rootReducer = combineReducers({Auth })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store}
