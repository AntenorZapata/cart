import {
  FETCH_CATEGORIES,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY_SUM,
  ADJUST_QTY_SUBTRACT,
  LOAD_CURRENT_ITEM,
  ADD_REVIEW,
  LOAD_REVIEW,
} from '../actions/types';

const initialState = {
  categories: [],
  products: [],
  currItem: null,
  cart: [],
  count: 1,
  rating: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      const item = state.products.find((item) => item.id === action.payload.id);

      const inCart = state.cart.find(
        (item) => (item.id === action.payload.id ? true : false) //false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case ADJUST_QTY_SUM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        ),
      };

    case ADJUST_QTY_SUBTRACT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty - action.payload.qty }
            : item
        ),
      };

    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currItem: action.payload.item,
      };

    case ADD_REVIEW:
      return {
        ...state,
        rating: [
          ...state.rating,
          {
            id: action.payload.id,
            email: action.payload.email,
            msg: action.payload.msg,
            rating: action.payload.rating,
          },
        ],
      };

    case LOAD_REVIEW:
      const reviews = state.rating.map((item) => item.id === action.payload.id);
      return {
        ...state,
        rating: [...state.rating],
      };

    default:
      return state;
  }
}

// export function counter(state = initialState, action) {
//   switch (action.type) {
//     case ADJUST_QTY:
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, qty: item.qty + action.payload.qty }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// }
