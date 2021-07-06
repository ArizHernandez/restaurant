import React from 'react'
import { useDispatch } from 'react-redux'
import { startCartAdd } from '../../actions/cart';

export const FoodShopCard = ({
  id,
  image,
  title,
  price
}) => {
  const dispatch = useDispatch();
  
  const handleAddCart = () => {
    const cart = {image, title, price, id};

    dispatch(startCartAdd(cart));
  }

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
            onClick={handleAddCart}
          >
          <i className="fas fa-shopping-cart fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
