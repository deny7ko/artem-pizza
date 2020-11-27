import React, { useState } from 'react';
import InputGroup from 'sharedComponents/InputGroup'
import calculateTotalPrice from 'utils/calculateTotalPrice'
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

const ConstructorPage = ({ updateOrderContext }) => {
  const { register, handleSubmit, watch } = useForm();
  const [submitted, setSubmitted] = useState(false)
  const selectedIngredients = watch();
  const totalPrice = calculateTotalPrice(selectedIngredients);

  const submitForm = () => {
    updateOrderContext({ selectedIngredients })
    setSubmitted(true)
  }

  if (submitted) {
    return <Redirect to="/checkout" />
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <h2>Конструктор Пицы</h2>

      <input type="submit" value={`Заказать за ${totalPrice}$`} />
      <InputGroup register={register} type="radio" title="Размер" inputDataList={[
        {name: "Размер", value: "30cm", title: "30cm"},
        {name: "Размер", value: "35cm", title: "35cm"}
        ]} />

      <InputGroup register={register} type="radio" title="Тесто" inputDataList={[
        {name: "Тесто", value: "тонкое", title: "тонкое"},
        {name: "Тесто", value: "пышное", title: "пышное"}
        ]} />

      <InputGroup register={register} type="radio" title="Соус" inputDataList={[
        {name: "Соус", value: "томатный", title: "томатный"},
        {name: "Соус", value: "белый", title: "белый"},
        {name: "Соус", value: "острый", title: "острый"}
        ]} />

      <InputGroup register={register} type="checkbox" title="Сыр" inputDataList={[
        {name: "Сыр", value: "моцарелла", title: "моцарелла"},
        {name: "Сыр", value: "чеддар", title: "чеддар"},
        {name: "Сыр", value: "дорблю", title: "дорблю"}
        ]} />

      <InputGroup register={register} type="checkbox" title="Овощи" inputDataList={[
        {name: "Овощи", value: "томаты", title: "томаты"},
        {name: "Овощи", value: "грибы", title: "грибы"},
        {name: "Овощи", value: "перец", title: "перец"}
        ]} />

      <InputGroup register={register} type="checkbox" title="Мясо" inputDataList={[
        {name: "Мясо", value: "бекон", title: "бекон"},
        {name: "Мясо", value: "пепперони", title: "пепперони"},
        {name: "Мясо", value: "ветчина", title: "ветчина"}
        ]} />

      <br></br>
    </form>
  )
}



export default ConstructorPage;
