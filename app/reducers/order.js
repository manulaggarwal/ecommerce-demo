import { combineReducers } from 'redux';
import * as types from '../types';


function order(state={}, action) {
    switch(action.type) {
        case types.CREATE_ORDER_SUCCESS: 
        case types.ADD_SHIPPING_ADDRESS_SUCCESS:
        case types.ADD_BILLING_ADDRESS_SUCCESS:
            return action.payload;
        default: return state;
    }
}

const categoryReducer = combineReducers({
    order
});

export default categoryReducer;