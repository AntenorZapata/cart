import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
  return function (dispatch) {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: FETCH_POSTS,
          payload: data,
        })
      );
  };
}

export function addProduct(categoryID, query) {
  return function (dispatch) {
    fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${query}`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: NEW_POST,
          payload: data.results,
        })
      );
  };
}
