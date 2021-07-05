import React, { useState } from 'react';
// import { ShoppingItem } from './ShoppingItem';

export const ShoppingCart = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  return (
    <div className="shoppingCart__main-container">
      <button 
        className="btn btn-shoppingCart"
        onClick={() => setMenuHidden(!menuHidden)}
      >
        <i className="fas fa-shopping-cart fa-lg"></i> Cart 
      </button>

      <div className={`shoppingCart__table-container ${!menuHidden && 'shoppingCart__table-container-show'}`}>
        <table className="shoppingCart__table">
          
          <thead>
            <tr className="ShoppingCart__header">
              <th>Desc</th>
              <th>Price</th>
              <th>Mount</th>
            </tr>
          </thead>
          
          <tbody>
            {/* <ShoppingItem /> */}

          </tbody>
        </table>
      </div>

    </div>
  )
}
