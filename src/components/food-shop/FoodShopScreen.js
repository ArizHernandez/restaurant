import React from 'react'
import { ShoppingCart } from '../shopping-cart/ShoppingCart'
import { FoodShopCards } from './FoodShopCards'

export const FoodShopScreen = () => {
  return (
    <section>
      <ShoppingCart />

      <h3 className="foodShop__title">Our best plates</h3>

      <FoodShopCards />
    </section>
  )
}
