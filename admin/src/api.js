const BASE_URL = 'http://localhost:3000'

export const getIngredients = async () => (
  fetch(`${BASE_URL}/ingredients`).then((res) => res.json())
)

export const postIngredient = async ({ name, slug, price, category, image }) => {
  fetch(`${BASE_URL}/ingredients`, {
    method: 'POST',
    body: JSON.stringify({ name, slug, price, category, image }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}
