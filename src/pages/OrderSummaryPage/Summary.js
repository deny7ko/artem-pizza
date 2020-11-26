import React from 'react';
import calculateTotalPrice from 'utils/calculateTotalPrice'

const Summary = ({ order }) => {
  const {selectedIngredients, paymentType} = order
  const totalPrice = calculateTotalPrice(selectedIngredients);

  const ingredientTypes = Object.keys(selectedIngredients)
  const getIngedientsByType = (ingredientType) => (
    [selectedIngredients[ingredientType]].flat()
  )

  return (
    <>
      <h2>Итоговый заказ</h2>
      <h3>Цена: {totalPrice}$</h3>
      <h4>Оплата: {paymentType}</h4>
      <div>
        {
          ingredientTypes.map(ingredientType => (
            <>
              <b>{ingredientType}</b>
              <ul>
                {getIngedientsByType(ingredientType).map((ingredient) =>
                  <li key={ingredient}>{ingredient}</li>
                )}
              </ul>
            </>
          ))
        }
      </div>
    </>
  )
}

export default Summary
