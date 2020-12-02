import React, { useState } from "react";
import calculateTotalPrice from 'utils/calculateTotalPrice'
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

const CheckoutPage = ({ order, updateOrderContext }) => {
  const { register, handleSubmit, watch } = useForm();
  const [submitted, setSubmitted] = useState(false)
  const form = watch();

  const totalPrice = calculateTotalPrice(order.selectedIngredients)
  const isPaymentByCard = form.payment_type === 'card'

  const submitForm = () => {
    updateOrderContext(form)
    setSubmitted(true)
  }

  const normalizeCreditCard = (value) => {
    console.log('type')
    return value.replace(/\s/g, "").match(/.{1,4}/g).join(' ').substr(0, 19) || ""
  }

  if (submitted) {
    return <Redirect to="/order-summary" />
  }

  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="submit" value={`Заказать за ${totalPrice}$`} />

        <fieldset>
          <legend>Форма оплаты:</legend>

          <input ref={register} type="radio" id="payment_type_card" name="payment_type" value="card" />
          <label htmlFor="payment_type_card">Card</label>

          <input ref={register} type="radio" id="payment_type_cash" name="payment_type" value="cash" />
          <label htmlFor="payment_type_cash">Cash</label>
        </fieldset>

        {isPaymentByCard && <>
          <fieldset>
            <legend>Card:</legend>

            <label htmlFor='credit-card'>Number</label>
            <input
              type="cc-card"
              id="credit-card"
              name="credit-card"
              ref={register}
              placeholder="0000 0000 0000 0000"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeCreditCard(value);
              }}
            />

          </fieldset>
        </>
        }
      </form>
    </>
  );
}

export default CheckoutPage
