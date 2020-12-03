import React from "react";
import { useQuery } from 'react-query'
import { getIngredients } from 'api'

const ToppingListPage = () => {
  const { isLoading, isError, data: toppingList, error } = useQuery('ingredients', getIngredients)

  if (isLoading) {
    return <>Loading ...</>
  }

  return (
    <>
      <h1>
        Topping List
      </h1>

      <ul>
        {JSON.stringify(toppingList)}
        {/* {toppingList.map((topping) => (
          <li>{topping}</li>
        ))} */}
      </ul>
    </>
  )
}

export default ToppingListPage
