import React from "react";
import calculateTotalPrice from 'utils/calculateTotalPrice'
import CurrentOrderContext from "contexts/CurrentOrderContext"
import Summary from './Summary'

class OrderSummaryPage extends React.Component {
  static contextType = CurrentOrderContext

  constructor(props) {
    super(props);
    this.state        = {
      submitted: false,
      order: {},
      paymentType: ''
    }
  }

  componentDidMount() {
    this.setState({order: this.context.order, paymentType: this.context.paymentType})
  }

  render() {
    const { order, paymentType } = this.state;
    const totalPrice = calculateTotalPrice(order);

    return (
      <>
        <h2>Order Summary</h2>
        <Summary selectedIngredients={order} totalPrice={totalPrice} paymentType={paymentType}/>
      </>
    );
  }
}

export default OrderSummaryPage
