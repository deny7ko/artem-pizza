import React, { useState, useRef } from 'react';
import InputGroup from 'sharedComponents/InputGroup'
import calculateTotalPrice from 'utils/calculateTotalPrice'
import { Redirect } from "react-router-dom";

const ConstructorPage = ({ updateOrderContext }) => {
  const [submitted, setSubmitted] = useState(false)
  const [selectedIngredients, setSelectedIngredients] = useState({})
  const formElement = useRef();

  const onRadioInputChange = (event) => {
    setSelectedIngredients({
      ...selectedIngredients,
      [event.target.name]: event.target.value
    })
  }

  const onCheckboxInputChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value
    let newSelected
    const prevSelected = selectedIngredients;
    newSelected = prevSelected[attributeName] ? prevSelected : {[attributeName]: []}

    if (event.target.checked) {
      newSelected[attributeName].push(attributeValue)
    } else {
      newSelected[attributeName] = newSelected[attributeName].filter(item => item !== attributeValue)
    }

    setSelectedIngredients({
      ...selectedIngredients,
      ...newSelected
    })
  }

  const submitForm = (event) => {
    event.preventDefault()
    updateOrderContext({ selectedIngredients })
    setSubmitted(true)
  }

  if (submitted) {
    return <Redirect to="/checkout" />
  }

  const totalPrice = calculateTotalPrice(selectedIngredients)

  return (
    <form onSubmit={submitForm} ref={formElement}>
      <h2>Конструктор Пицы</h2>

      <input type="submit" value={`Заказать за ${totalPrice}$`} />
      <InputGroup type="radio" title="Размер" onChange={onRadioInputChange} inputDataList={[
        {name: "Размер", value: "30cm", title: "30cm"},
        {name: "Размер", value: "35cm", title: "35cm"}
        ]} />

      <InputGroup type="radio" title="Тесто" onChange={onRadioInputChange} inputDataList={[
        {name: "Тесто", value: "тонкое", title: "тонкое"},
        {name: "Тесто", value: "пышное", title: "пышное"}
        ]} />

      <InputGroup type="radio" title="Соус" onChange={onRadioInputChange} inputDataList={[
        {name: "Соус", value: "томатный", title: "томатный"},
        {name: "Соус", value: "белый", title: "белый"},
        {name: "Соус", value: "острый", title: "острый"}
        ]} />

      <InputGroup type="checkbox" title="Сыр" onChange={onCheckboxInputChange} inputDataList={[
        {name: "Сыр", value: "моцарелла", title: "моцарелла"},
        {name: "Сыр", value: "чеддар", title: "чеддар"},
        {name: "Сыр", value: "дорблю", title: "дорблю"}
        ]} />

      <InputGroup type="checkbox" title="Овощи" onChange={onCheckboxInputChange} inputDataList={[
        {name: "Овощи", value: "томаты", title: "томаты"},
        {name: "Овощи", value: "грибы", title: "грибы"},
        {name: "Овощи", value: "перец", title: "перец"}
        ]} />

      <InputGroup type="checkbox" title="Мясо" onChange={onCheckboxInputChange} inputDataList={[
        {name: "Мясо", value: "бекон", title: "бекон"},
        {name: "Мясо", value: "пепперони", title: "пепперони"},
        {name: "Мясо", value: "ветчина", title: "ветчина"}
        ]} />

      <br></br>
    </form>
  )
}



export default ConstructorPage;
