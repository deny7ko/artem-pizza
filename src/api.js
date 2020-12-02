const BASE_URL = 'http://localhost:3000'

export const postOrder = async ({ ingredients, card_number }) => {
  fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    body: JSON.stringify({ ingredients, card_number }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}
