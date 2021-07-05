import React from 'react'

export const ShoppingCart = () => {
  return (
    <div className="shoppingCart__main-container">
      <button className="btn btn-shoppingCart">
        <i className="fas fa-shopping-cart fa-lg"></i>
      </button>

      <div className="shoppingCart__table-container">
        <table className="shoppingCart__table">
          <thead>
            <tr>
              <th>Desc</th>
              <th>Price</th>
              <th>Mount</th>
            </tr>
          </thead>
        </table>
      </div>
      
    </div>
  )
}
