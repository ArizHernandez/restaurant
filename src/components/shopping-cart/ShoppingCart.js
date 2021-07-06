import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteNotification } from '../../actions/ui';
import { ShoppingItem } from './ShoppingItem';

export const ShoppingCart = () => {
  const {cart, ui} = useSelector(state => state);
  const [menuHidden, setMenuHidden] = useState(true);
  const dispatch = useDispatch();
  
  const totalCart = cart.cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.mount), 0);

  const handleShowMenu = () => {
    setMenuHidden(!menuHidden);

    dispatch(deleteNotification())
  }

  return (
    <div className="shoppingCart__main-container">
      <button 
        className={`btn btn-shoppingCart ${ui.notification && 'btn-noti'}`}
        onClick={handleShowMenu}
      >
        <i className="fas fa-shopping-cart fa-lg"></i> Cart 
      </button>

      <div className={`shoppingCart__table-container ${!menuHidden && 'shoppingCart__table-container-show'}`}>
        
        {
          cart.cart.length > 0 
          ?
          (
            <table className="shoppingCart__table">
              
              <thead>
                <tr className="ShoppingCart__header">
                  <th>Desc</th>
                  <th>Price</th>
                  <th>Mount</th>
                </tr>
              </thead>
              
              <tbody>
                {
                    cart.cart.map( cartItem => (
                      <ShoppingItem key={cartItem.id} {...cartItem}/>
                    ))
                }

                <tr>
                  <td>
                    <h3>
                      Total
                    </h3>
                  </td>
                  <td>
                    ${totalCart}
                  </td>
                </tr>
              </tbody>
            </table>
          )
          :
          (
            <p className="ShoppingCart__message">
              Shopping cart clear!
            </p>
          )
        }
      </div>

    </div>
  )
}
