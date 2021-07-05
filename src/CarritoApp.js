import React from 'react';

import { FoodShopScreen } from './components/food-shop/FoodShopScreen';
import { Footer } from './components/footer/Footer';
import { HeaderScreen } from './components/header/HeaderScreen';

export const CarritoApp = () => {
  return (
    <>
      <HeaderScreen />
      <FoodShopScreen />
      <Footer />
    </>
  )
}