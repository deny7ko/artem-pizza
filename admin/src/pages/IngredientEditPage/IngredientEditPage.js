import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { getIngredient, updateIngredient } from "api";
import { useParams } from "react-router-dom";

const IngredientEditPage = () => {
  const { ingredientId } = useParams();

  const { register, handleSubmit, reset } = useForm();
  const { isLoading, data: ingredient } = useQuery(
    ingredientId,
    getIngredient,
    {
      onSuccess: (data) => {
        reset(data);
      },
    }
  );
  const [updateIngredientMutate] = useMutation(updateIngredient);

  if (isLoading) {
    return <>Loading ...</>;
  }

  const submitForm = (data) => {
    updateIngredientMutate({
      id: ingredientId,
      name: data.name,
      slug: data.slug,
      price: data.price,
      category: data.category,
    });
    alert(JSON.stringify(data));
  };

  return (
    <>
      <h1>Edit Ingredient: {ingredient.name}</h1>

      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label>Name</label>
          <input ref={register} type="text" name="name"></input>
        </div>
        <div>
          <label>Slug</label>
          <input ref={register} type="text" name="slug"></input>
        </div>
        <div>
          <label>Price</label>
          <input ref={register} type="tel" name="price"></input>
        </div>
        <div>
          <label>Category</label>
          <select name="category" ref={register}>
            <option value="">--Please choose an option--</option>
            <option value="vegetables">Vegetables</option>
            <option value="sauces">Sauces</option>
            <option value="meat">Meat</option>
            <option value="cheese">Cheese</option>
          </select>
        </div>
        <div>
          <label>Image</label>
          <input ref={register} type="file" name="image"></input>
        </div>

        <button>Update</button>
      </form>
    </>
  );
};

export default IngredientEditPage;
