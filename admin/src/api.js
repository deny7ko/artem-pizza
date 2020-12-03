const BASE_URL = 'http://localhost:3000'

export const getIngredients = async () => (
  fetch(`${BASE_URL}/ingredients`).then((res) => res.json())
)
