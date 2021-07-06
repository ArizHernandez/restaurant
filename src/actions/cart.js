import { Types } from "../types/types";
import { addNotification } from "./ui";

export const startCartAdd = (cart) => {
  return (dispatch, getState) => {
    const {cart: actualCart} = getState().cart;
    let toChange;

    actualCart.forEach(cartItem => {
      if(cartItem.id === cart.id ){
        toChange = true;
        dispatch(changeMountCart(cartItem.id));
      }
    });
    
    if(!toChange){
      cart.mount = 1;
      dispatch(addCart(cart));
    }

    dispatch(addNotification());
  }
}

export const addCart = (cart) => ({
  type: Types.addCart,
  payload: cart
})

export const deleteCart = (id) => ({
  type: Types.deleteCart,
  payload: id
});

export const changeMountCart = (id) => ({
  type: Types.changeMountCart,
  payload: id
})