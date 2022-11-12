import { applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import { reducer as AppReducer } from './AppReducer/reducer';
import { reducer as Auth } from './Auth/reducer';
import { cartReducer } from './CartReducer/cart.reducer';

const rootReducer = combineReducers({Auth:Auth,AppReducer:AppReducer,cartReducer:cartReducer })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store };
