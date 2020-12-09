const BASE_URL = 'http://localhost:3000'

export const getIngredientList = async () => (
  fetch(`${BASE_URL}/ingredients`).then((res) => res.json())
)

export const getIngredient = async (id) => {
  return (
    fetch(`${BASE_URL}/ingredients/${id}`).then((res) => res.json())
  )
}

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

export const updateIngredient = async ({ id, name, slug, price, category, image }) => {
  fetch(`${BASE_URL}/ingredients/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, slug, price, category, image }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

export const deleteIngredient = async (id) => {
  fetch(`${BASE_URL}/ingredients/${id}`, {method: 'DELETE'})
    .then((response) => response.json())
    .then((json) => console.log(json))
}
