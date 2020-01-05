import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import {lunch, dinner, beverage} from './lunchReducer';
import authReducer from './authReducer';


export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    lunch,
    dinner,
    beverage

});
