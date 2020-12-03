import React from 'react';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import { postIngredient } from 'api';

const IngredientCreatePage = () => {
  const { register, handleSubmit } = useForm();
  const [postIngredientMutate] = useMutation(postIngredient)

  const submitForm = (data) => {
    postIngredientMutate(
      {
        name: data.name,
        slug: data.name,
        price: data.price,
        category: data.category
        // image: data.image
      }
    )
    alert(JSON.stringify(data))
  }

  return (
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
        <label >Price</label>
        <input ref={register} type="tel" name="price"></input>
      </div>
      <div>
        <label>Category</label>
        <select  name="category" ref={register}>
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

      <button>Create product</button>
    </form>
  )
}

export default IngredientCreatePage
