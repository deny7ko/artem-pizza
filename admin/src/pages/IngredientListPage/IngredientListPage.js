import React from "react";
import { useQuery } from "react-query";
import { getIngredientList } from "api";
import Ingredient from "components/Ingredient";

const IngredientListPage = () => {
  const { isLoading, data: ingredientList } = useQuery(
    "ingredientList",
    getIngredientList
  );

  if (isLoading) {
    return <>Loading ...</>;
  }

  return (
    <>
      <h1>Ingredient List</h1>

      {ingredientList.map((ingredient) => {
        return (
          <div key={ingredient.id}>
            <Ingredient {...ingredient} />
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default IngredientListPage;
