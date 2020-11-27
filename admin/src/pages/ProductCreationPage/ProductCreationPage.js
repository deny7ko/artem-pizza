import React from 'react'
import { useForm } from "react-hook-form";


const ProductCreationPage = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label >Price</label>
        <input ref={register} type="tel" name="price"></input>
      </div>
      <div>
        <label>Name</label>
        <input ref={register} type="text" name="name"></input>
      </div>
      <div>
        <label>Slug</label>
        <input ref={register} type="text" name="slug"></input>
      </div>
      <div>
        <label>Picture</label>
        <input ref={register} type="file" name="picture"></input>
      </div>

      <button>Create product</button>
    </form>
  )
}

export default ProductCreationPage
