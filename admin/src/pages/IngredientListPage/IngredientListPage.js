import React from "react";
import { useQuery } from 'react-query'
import { getIngredientList, deleteIngredient } from 'api'
import Ingredient from 'components/Ingredient'
import { Link } from "react-router-dom";

const IngredientListPage = () => {
  const { isLoading, isError, data: ingredientList, error } = useQuery('ingredientList', getIngredientList)

  if (isLoading) {
    return <>Loading ...</>
  }

  return (
    <>
      <h1>
        Ingredient List
      </h1>

      {ingredientList.map((ingredient) => {
        return (
          <div key={ingredient.id}>
            <Ingredient {...ingredient} />

            <p style={{color: 'red'}}>
              <a href="#" onClick={handleClick}>
                Delete
              </a>
            </p>

            <p style={{color: 'blue'}}>
              <Link to={`/admin/ingredients/${ingredient.id}`}>Edit</Link>
            </p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default IngredientListPage
