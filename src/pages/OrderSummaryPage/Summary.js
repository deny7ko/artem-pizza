import React from 'react';

class Summary extends React.Component {
  render () {
    const selectedIngredients = this.props.selectedIngredients
    const ingredientTypes = Object.keys(selectedIngredients)
    const getIngedientsByType = (ingredientType) => (
      [selectedIngredients[ingredientType]].flat()
    )

    return (
      <>
        <h2>Итоговый заказ</h2>
        <h3>Цена: {this.props.totalPrice}$</h3>
        <h4>Оплата: {this.props.paymentType}</h4>
        <div>
          {
            ingredientTypes.map(ingredientType => (
              <IngredientsGroup
                key={ingredientType}
                ingredientType={ingredientType}
                ingredients={getIngedientsByType(ingredientType)}
              />
            ))
          }
        </div>
      </>
    )
  }
}

class IngredientsGroup extends React.Component {
  render () {
    return (
      <>
        <b>{this.props.ingredientType}</b>
        <ul>
          {this.props.ingredients.map((ingredient) =>
            <li key={ingredient}>{ingredient}</li>
          )}
        </ul>
      </>
    )
  }
}

export default Summary
