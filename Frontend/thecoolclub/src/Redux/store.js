

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer.js";
export const store = legacy_createStore(AppReducer, applyMiddleware(thunk));


