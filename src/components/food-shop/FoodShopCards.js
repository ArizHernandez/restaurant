import React from 'react';
import { foodDB } from '../../db/db';
import { FoodShopCard } from './FoodShopCard';

export const FoodShopCards = () => {
  return (
    <div className="foodShop__main-container">
      <div className="foodShop__cards-container">
       
        {
          foodDB.map( food => (
          <FoodShopCard key={food.id} {...food}/>
          ))
        }
        
      </div>
    </div>
  )
}