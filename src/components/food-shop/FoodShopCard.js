import React from 'react'

export const FoodShopCard = ({
  image,
  title,
  price
}) => {
  return (
    <div 
      className="foodShop__card-container"
      style={{backgroundImage: `url(${image})`}}
    >
      <div className="foodShop__card-info-container">
        <div className="foodShop__card-info">
          <h3 className="foodShop__card-text">{title} <span>${price}</span></h3>

          <button
            className="btn btn-primary"
          >
          <i className="fas fa-shopping-cart fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
