import React from "react";
import Summary from './Summary'
import InputGroup from 'components/InputGroup'
import CurrentOrderContext from 'contexts/CurrentOrderContext'

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

class CurrentOrderDecorator extends React.Component {
  render() {
    return (
      <CurrentOrderContext.Consumer>
          {
            ({currentOrder, setCurrentOrder}) => {
              console.log(currentOrder)

              return (
                <CheckoutPage currentOrder={currentOrder} />
              )
            }
          }
        </CurrentOrderContext.Consumer>
    )
  }
}

export default CurrentOrderDecorator
