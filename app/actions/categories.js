import { push } from 'react-router-redux';
import { categoryService } from '../services';
import * as types from '../types';


function allCategoryFetchSuccess(payload) {
    return {
        type: types.GET_CATEGORIES,
        payload
    }
}

function categoryFetchSuccess(payload) {
    return {
        type: types.GET_CATEGORY_WITH_PRODUCTS,
        payload
    }
}

function productFetchSuccess(payload) {
    return {
        type: types.GET_PRODUCT,
        payload
    }
}

export function getProduct(id) {
    return dispatch=>{
        categoryService().getProduct(id).then(res=>{
            dispatch(productFetchSuccess(res.data));
            dispatch(push(`/product/${id}`));
        });
    }
}

export function getCategory(id) {
    return dispatch=>{
        categoryService().fetchCategoryWithProducts(id).then(res=>{
            dispatch(categoryFetchSuccess(res.data));
            dispatch(push(`/category/${id}`));
        })
    }
}

export function categories() {
    return dispatch=>{
        categoryService().fetchCategories().then(res=>{
            dispatch(allCategoryFetchSuccess(res.data));
        })
    }
}