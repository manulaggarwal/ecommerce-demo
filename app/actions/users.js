import { push } from 'react-router-redux';
import { authService } from '../services';
import * as types from '../types';



function loadProfile(payload) {
  return {
    type: types.LOAD_USER_PROFILE,
    payload
  }
}

function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message
  };
}

function logoutSuccess(payload) {
  return { type: types.LOGOUT_SUCCESS_USER, payload };
}


function registerSuccess(user) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    user
  }
}

function editUserSuccess(user) {
  return {
    type: types.EDIT_USER_SUCCESS,
    user
  }
}

function addToCartSuccess(payload) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    payload
  }
}

function getCartSuccess(payload) {
  return {
    type: types.GET_CART_ITEMS,
    payload
  }
}

function removeCartItemSuccess(payload) {
  return {
    type: types.REMOVE_CART_ITEM_SUCCESS,
    payload
  }
}

 function addAddressSuccess(payload) {
  return {
    type: types.ADD_ADDRESS_SUCCESS,
    payload
  }
}

function editAddressSuccess(payload) {
  return {
    type: types.EDIT_ADDRESS_SUCCESS,
    payload
  }
}

function deleteAddressSuccess(payload) {
  return {
    type: types.DELETE_ADDRESS_SUCCESS,
    payload
  }
}

export function register(data) {
  return dispatch => authService().signUp(data).then((res)=>{
    dispatch(registerSuccess('Register Successful'));
    dispatch(loadProfile(res.data));
    dispatch(loginSuccess('Login Successful'));
  });
}

export function login(data) {  
    return dispatch => authService().login({...data}).then((res)=>{
        dispatch(loginSuccess('Login Successful'));
        dispatch(loadProfile(res.data))
    }) 
}

export function logOut() {
  return (dispatch) => {

    return authService().logOut()
      .then((response) => {
          dispatch(logoutSuccess(false));
          dispatch(push('/'));
      })
  };
}

export function editUser(user) {
  return (dispatch) => {
    return authService().editUserDetails(user)
      .then((response)=>{
        dispatch(editUserSuccess(response.data));
    })
  }
}

export function addProductToCart(productId) {
  return (dispatch) => {
    return authService().addToCart(productId).then((resposne)=>{
      dispatch(addToCartSuccess(resposne.data));
    })
  }
}

export function getCartItems() {
  return dispatch => {
    return authService().getCartItems().then(response=>{
      dispatch(getCartSuccess(response.data));
    })
  }
}

export function removeCartItem(id) {
  return dispatch => {
    return authService().removeCartItem(id).then(response=>{
      dispatch(loadProfile(response.data));
      dispatch(getCartItems());
    })
  }
}

export function addAddress(data) {
  return dispatch => {
    return authService().addAddress(data).then(response=>{
      dispatch(addAddressSuccess(response.data))
    })
  }
}

export function editAddress(data) {
  return dispatch => {
    return authService().editAddress(data).then(response=>{
      dispatch(editAddressSuccess(response.data))
    })
  }
}

export function deleteAddress(id) {
  return dispatch => {
    return authService().deleteAddress(id).then(response=>{
        dispatch(deleteAddressSuccess(response.data));
    })
  }
}