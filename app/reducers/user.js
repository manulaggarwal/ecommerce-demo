import { combineReducers } from 'redux';
import * as types from '../types';

const login = (
  state = false,
  action
) => {
  switch(action.type) {
    case types.SIGNUP_SUCCESS_USER:
    case types.LOGOUT_ERROR_USER:
    case types.LOGIN_SUCCESS_USER : 
      return true
    case types.LOGOUT_SUCCESS_USER:
      return false;
    default: return state
  }
}

const authenticated = (
  state = false,
  action
) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
    case types.LOGOUT_ERROR_USER:
      return true;
    case types.LOGIN_ERROR_USER:
    case types.SIGNUP_ERROR_USER:
    case types.LOGOUT_SUCCESS_USER:
      return false;
    default:
      return state;
  }
};

const profile = (state={}, action) => {
  switch (action.type) {
    case types.EDIT_USER_SUCCESS:
    case types.ADD_TO_CART_SUCCESS:
    case types.LOGOUT_SUCCESS_USER:
    case types.LOAD_USER_PROFILE:
    case types.ADD_ADDRESS_SUCCESS:
    case types.EDIT_ADDRESS_SUCCESS:
    case types.DELETE_ADDRESS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

const cart = (state=[], action) => {
  switch(action.type) {
    case types.GET_CART_ITEMS:
      return action.payload;
    default:
      return state;
  }
}

const userReducer = combineReducers({
    login,
    authenticated,
    profile,
    cart
});

export default userReducer;
