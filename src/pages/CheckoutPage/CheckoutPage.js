import React from "react";
import Summary from './Summary'
import InputGroup from 'core/InputGroup'

class CheckoutPage extends React.Component {
  render() {
    return (
      <>
        <h2>Checkout</h2>
        {/* <Summary /> */}
        <form>
          <input type="submit" value={`Заказать за ${this.totalPrice}$`} />

          <InputGroup type="radio" title="Оплата" inputDataList={[
            {name: "payment_type", value: "card", title: "Картой"},
            {name: "payment_type", value: "cash", title: "Наличка"}
            ]} />
        </form>
      </>
    );
  }
}

export default CheckoutPage
