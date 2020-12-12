import React, { useState } from "react";
import calculateTotalPrice from "utils/calculateTotalPrice";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { postOrder } from "api";

const CheckoutPage = ({ order, updateOrderContext }) => {
  const { register, handleSubmit, watch } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [postOrderMutate] = useMutation(postOrder);

  const form = watch();

  const totalPrice = calculateTotalPrice(order.selectedIngredients);
  const isPaymentByCard = form.payment_type === "card";

  const submitForm = async () => {
    try {
      await postOrderMutate({
        ingredients: order.selectedIngredients,
        card_number: form.card_number,
      });

      updateOrderContext(form);
    } catch (error) {
      console.error(error);
    }

    setSubmitted(true);
  };

  const normalizeCreditCard = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        .join(" ")
        .substr(0, 19) || ""
    );
  };

  if (submitted) {
    return <Redirect to="/order-summary" />;
  }

  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <input type="submit" value={`Заказать за ${totalPrice}$`} />

        <fieldset>
          <legend>Форма оплаты:</legend>

          <input
            ref={register}
            type="radio"
            id="payment_type_card"
            name="payment_type"
            value="card"
          />
          <label htmlFor="payment_type_card">Card</label>

          <input
            ref={register}
            type="radio"
            id="payment_type_cash"
            name="payment_type"
            value="cash"
          />
          <label htmlFor="payment_type_cash">Cash</label>
        </fieldset>

        {isPaymentByCard && (
          <>
            <fieldset>
              <legend>Card:</legend>

              <label htmlFor="card_number">Number</label>
              <input
                type="cc-card"
                id="credit-card"
                name="card_number"
                ref={register}
                placeholder="0000 0000 0000 0000"
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = normalizeCreditCard(value);
                }}
              />
            </fieldset>
          </>
        )}
      </form>
    </>
  );
};

export default CheckoutPage;
