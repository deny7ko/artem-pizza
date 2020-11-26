import React, { useState } from "react";
import InputGroup from 'sharedComponents/InputGroup'
import calculateTotalPrice from 'utils/calculateTotalPrice'
import { Redirect } from "react-router-dom";

const CheckoutPage = ({ order, updateOrderContext }) => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({})
  const totalPrice = calculateTotalPrice(order.selectedIngredients)

  const submitForm = (event) => {
    event.preventDefault()
    updateOrderContext(form)
    setSubmitted(true)
  }

  const onRadioInputChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  if (submitted) {
    return <Redirect to="/order-summary" />
  }

  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={submitForm}>
        <input type="submit" value={`Заказать за ${totalPrice}$`} />

        <InputGroup type="radio" onChange={onRadioInputChange} title="Оплата" inputDataList={[
          {name: "payment_type", value: "card", title: "Картой"},
          {name: "payment_type", value: "cash", title: "Наличка"}
          ]} />
      </form>
    </>
  );
}

export default CheckoutPage
