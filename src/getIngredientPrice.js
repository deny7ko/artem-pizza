const INGREDIENT_TO_PRICE_MAPPING = {
  "Размер": {
    "35cm": 50
  }
}

const INGREDIENT_DEFAULT_PRICE = 29

const getIngredientPrice = ({ type, name }) => {
  const ingredientsByType = INGREDIENT_TO_PRICE_MAPPING[type]

  if (!ingredientsByType) {
    return INGREDIENT_DEFAULT_PRICE
  }

  const ingredientPrice = ingredientsByType[name]

  if (!ingredientPrice) {
    return INGREDIENT_DEFAULT_PRICE
  }

  return ingredientPrice
}

export default getIngredientPrice
