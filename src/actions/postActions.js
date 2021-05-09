import {
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY_SUM,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY_SUBTRACT,
  ADD_REVIEW,
  LOAD_REVIEW,
  FETCH_TRUE,
} from './types';

export function fetchCategories() {
  return function (dispatch) {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_CATEGORIES,
          payload: data,
        })
      );
  };
}

export function fetchProducts(query) {
  return function (dispatch) {
    dispatch({
      type: FETCH_TRUE,
      payload: true,
    });
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${query}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_PRODUCTS,
          payload: data.results,
        })
      );
  };
}

export function addToCart(itemID) {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
}

export function removeFromCart(itemID) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
}

export function adjustQtySum(itemID, value) {
  return {
    type: ADJUST_QTY_SUM,
    payload: {
      id: itemID,
      qty: value,
    },
  };
}

export function adjustQtySubtract(itemID, value) {
  return {
    type: ADJUST_QTY_SUBTRACT,
    payload: {
      id: itemID,
      qty: value,
    },
  };
}

export function loadCurrItem(item) {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: {
      item,
    },
  };
}

export function addReview(id, email, msg, rating) {
  return {
    type: ADD_REVIEW,
    payload: {
      id,
      email,
      msg,
      rating,
    },
  };
}

// no need
export function loadReview(id) {
  return {
    type: LOAD_REVIEW,
    payload: {
      id,
    },
  };
}
