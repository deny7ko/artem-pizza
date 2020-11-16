import getIngredientPrice from './getIngredientPrice'

const STARTING_PRICE = 200

const calculateTotalPrice = (ingredients) => {
  let ingredientsPrices = []
  for (const [key, value] of Object.entries(ingredients)) {
    if (Array.isArray(value)) {
      value.forEach(itemValue => {
        const ingredientPrice = getIngredientPrice({ name: itemValue })
        ingredientsPrices.push(ingredientPrice)
      })
    } else {
      const ingredientPrice = getIngredientPrice({ type: key, name: value })
      ingredientsPrices.push(ingredientPrice)
    }
  }

 const totalPrice = ingredientsPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, STARTING_PRICE)

  return totalPrice
}

export default calculateTotalPrice
