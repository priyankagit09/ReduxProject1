import React from 'react'
import axios from 'axios';
import { ActionTypes } from '../ActionTypes'

export const fetchProducts = () => {
  return async (dispatch) => {
    const response= await axios.get("https://fakestoreapi.com/products");
  
    dispatch({type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data})
  }
  
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response= await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(response)
    dispatch({type: ActionTypes.SELECTED_PRODUCT,
      payload: response.data})
  }
  
};


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products
  }
};

// export const selectedProduct=(product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product
//   }
// }
export const removeSelectedProduct=() => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
   
  }
}