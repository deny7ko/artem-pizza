import React from 'react'

const CurrentOrderContext = React.createContext()

class CurrentOrderProvider extends React.Component {
  state = {
    order: {},
    paymentType: ''
  }

  setOrder = (order) => {
    this.setState({ order })
  }

  setPaymentType = (paymentType) => {
    this.setState({ paymentType })
  }

  render() {
    const { children } = this.props;
    const { order, paymentType } = this.state;
    const { setOrder, setPaymentType } = this

    return (
      <CurrentOrderContext.Provider
        value={{order, paymentType, setOrder, setPaymentType}}
      >
        {children}
      </CurrentOrderContext.Provider>
    )
  }
}

export default CurrentOrderContext
export { CurrentOrderProvider }
