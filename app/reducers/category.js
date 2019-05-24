import { combineReducers } from 'redux';
import * as types from '../types';


function category(state={}, action) {
    switch(action.type) {
        case types.GET_CATEGORIES: 
            return action.payload;
        default: return state;
    }
}

function selectedCategory(state={}, action) {
    switch(action.type) {
        case types.GET_CATEGORY_WITH_PRODUCTS:
            return action.payload;
        default: return state;
    }
}

function product(state={}, action) {
    switch(action.type) {
        case types.GET_PRODUCT:
            return action.payload;
        default: return state;
    }
}

const categoryReducer = combineReducers({
    category,
    selectedCategory,
    product
});

export default categoryReducer;