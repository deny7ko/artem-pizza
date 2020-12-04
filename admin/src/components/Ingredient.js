import React from "react";
import { Link } from "react-router-dom";

const Ingredient = ({id, name, price}) => {
  return (
    <>
      <p><b>name:</b>{name}</p>
      <p><b>price:</b>{price}</p>
    </>
  )
}

export default Ingredient
