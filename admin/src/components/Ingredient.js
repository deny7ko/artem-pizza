import React from "react";
import { Link } from "react-router-dom";
import { deleteIngredient } from "api";
import { useMutation, useQueryCache } from "react-query";

const Ingredient = ({ id, name, price }) => {
  const queryCache = useQueryCache();
  const [deleteMutation] = useMutation(deleteIngredient);

  const handleDeleteClick = async (e) => {
    await deleteMutation(id);
    queryCache.invalidateQueries("ingredientList");
  };

  return (
    <>
      <p>
        <b>name:</b>
        {name}
      </p>
      <p>
        <b>price:</b>
        {price}
      </p>

      <p style={{ color: "red" }}>
        <a href="#" onClick={handleDeleteClick}>
          Delete
        </a>
      </p>

      <p style={{ color: "blue" }}>
        <Link to={`/admin/ingredients/${id}/edit`}>Edit</Link>
      </p>
    </>
  );
};

export default Ingredient;
