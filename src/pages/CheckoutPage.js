import React from "react";
import InputGroup from 'shared-components/InputGroup'
import calculateTotalPrice from 'utils/calculateTotalPrice'
import CurrentOrderContext from "contexts/CurrentOrderContext"
import { Redirect } from "react-router-dom";

class CheckoutPage extends React.Component {
  static contextType = CurrentOrderContext

  constructor(props) {
    super(props);
    this.state        = {
      submitted: false,
      order: {},
      form: {}
    }
  }

  submitForm = (event) => {
    event.preventDefault()
    this.context.setPaymentType(this.state.form.payment_type)
    this.setState({submitted: true})
  }

  componentDidMount() {
    this.setState({order: this.context.order})
  }

  onRadioInputChange = (event) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [event.target.name]: event.target.value
      }
    }))
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/order-summary" />
    }

    const order = this.state.order;
    const totalPrice = calculateTotalPrice(order)

    return (
      <>
        <h2>Checkout</h2>
        <form onSubmit={this.submitForm}>
          <input type="submit" value={`Заказать за ${totalPrice}$`} />

          <InputGroup type="radio" onChange={this.onRadioInputChange} title="Оплата" inputDataList={[
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
