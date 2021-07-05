import React from 'react'
import { ShoppingCart } from '../shopping-cart/ShoppingCart'
import { FoodShopCards } from './FoodShopCards'

export const FoodShopScreen = () => {
  return (
    <section>
      <ShoppingCart />

      <FoodShopCards />
    </section>
  )
}
