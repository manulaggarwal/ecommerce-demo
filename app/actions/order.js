import { push } from 'react-router-redux';
import { orderService } from '../services';
import * as types from '../types';

function createOrderSuccess(payload) {
    return {
        type: types.CREATE_ORDER_SUCCESS,
        payload
    }
}

function addShippingAddressSuccess(payload) {
    return {
        type: types.ADD_SHIPPING_ADDRESS_SUCCESS,
        payload
    }
}

function addBillingAddressSuccess(payload) {
    return {
        type: types.ADD_BILLING_ADDRESS_SUCCESS,
        payload
    }
}

export function createOrder() {
    return dispatch => {
        orderService().createOrder().then(response=>{
            dispatch(createOrderSuccess(response.data));
        })
    }
}

export function addShippingAddress(data) {
    return dispatch => {
        orderService().addShippingAddress(data).then(response=>{
            dispatch(addShippingAddressSuccess(response.data));
        })
    }
}

export function addBillingAddress(data) {
    return dispatch => {
        orderService().addBillingAddress(data).then(response=>{
            dispatch(addBillingAddressSuccess(response.data));
        })
    }
}

export function billingAddressSameAsShippingAddressToggle(data) {
    return dispatch => {
        orderService().addBillingAddress(data).then(response=>{
            dispatch(addBillingAddressSuccess(response.data));
        })
    }
}