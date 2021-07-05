import React from 'react'

export const ShoppingItem = ({
  title,
  image,
  price,
  mount
}) => {
  return (
    <tr className="card__container">
      <td>
        <img 
          className="card__image"
          src={image}
          alt={title}
        />
        <p className="card__title">
          {title}
        </p>
      </td>
      <td>
        ${price}
      </td>
      <td>
        {mount}
      </td>
    </tr>
  )
}
