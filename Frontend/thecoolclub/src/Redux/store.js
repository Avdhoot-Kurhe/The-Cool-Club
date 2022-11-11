import { applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
// import { reducer as App } from './App/reducer';
import { reducer as Auth } from './Auth/reducer';

const rootReducer = combineReducers({Auth })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store}