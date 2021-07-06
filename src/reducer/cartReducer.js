import { Types } from "../types/types";

const initialState = {
  cart: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.addCart:
      return ({
        ...state,
        cart: [action.payload , ...state.cart]
      });

    case Types.deleteCart:
      return ({
        ...state,
        cart: state.cart.filter( item => item.id === action.payload ? null : item)
      });

    case Types.changeMountCart:
      return ({
        ...state,
        cart: state.cart.map( item => item.id === action.payload ? {...item, mount: item.mount + 1} : item )
      });
  
    default:
      return state;
  }
}