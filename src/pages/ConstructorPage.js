import React from 'react';
import InputGroup from 'components/InputGroup'
import calculateTotalPrice from 'utils/calculateTotalPrice'
import CurrentOrderContext from 'contexts/CurrentOrderContext'
import { Redirect } from "react-router-dom";

class ConstructorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state        = {
      submitted: false,
      selectedIngredients: {
      }
    }
  }

  onRadioInputChange = (event) => {
    this.setState((prevState) => ({
      selectedIngredients: {
        ...prevState.selectedIngredients,
        [event.target.name]: event.target.value
      }
    }))
  }

  onCheckboxInputChange = (event) => {
    const attributeName = event.target.name
    const attributeValue = event.target.value
    let newSelected
    const prevSelected = this.state.selectedIngredients;
    newSelected = prevSelected[attributeName] ? prevSelected : {[attributeName]: []}

    if (event.target.checked) {
      newSelected[attributeName].push(attributeValue)
    } else {
      newSelected[attributeName] = newSelected[attributeName].filter(item => item !== attributeValue)
    }

    this.setState((prevState) => (
      {
        selectedIngredients: {
          ...prevState.selectedIngredients,
          ...newSelected
        }
      }
    ))
  }

  submitForm = (event) => {
    event.preventDefault()
    const {selectedIngredients } = this.state
    debugger
    this.props.setCurrentOrder(selectedIngredients)
    debugger
    this.setState({submitted: true})
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/checkout" />
    }

    this.totalPrice = calculateTotalPrice(this.state.selectedIngredients)

    return (
      <form onSubmit={this.submitForm} ref={this.formElement}>
        <h2>Выбери свою пицу</h2>

        <input type="submit" value={`Заказать за ${this.totalPrice}$`} />
        <InputGroup type="radio" title="Размер" onChange={this.onRadioInputChange} inputDataList={[
          {name: "Размер", value: "30cm", title: "30cm"},
          {name: "Размер", value: "35cm", title: "35cm"}
          ]} />

        <InputGroup type="radio" title="Тесто" onChange={this.onRadioInputChange} inputDataList={[
          {name: "Тесто", value: "тонкое", title: "тонкое"},
          {name: "Тесто", value: "пышное", title: "пышное"}
          ]} />

        <InputGroup type="radio" title="Соус" onChange={this.onRadioInputChange} inputDataList={[
          {name: "Соус", value: "томатный", title: "томатный"},
          {name: "Соус", value: "белый", title: "белый"},
          {name: "Соус", value: "острый", title: "острый"}
          ]} />

        <InputGroup type="checkbox" title="Сыр" onChange={this.onCheckboxInputChange} inputDataList={[
          {name: "Сыр", value: "моцарелла", title: "моцарелла"},
          {name: "Сыр", value: "чеддар", title: "чеддар"},
          {name: "Сыр", value: "дорблю", title: "дорблю"}
          ]} />

        <InputGroup type="checkbox" title="Овощи" onChange={this.onCheckboxInputChange} inputDataList={[
          {name: "Овощи", value: "томаты", title: "томаты"},
          {name: "Овощи", value: "грибы", title: "грибы"},
          {name: "Овощи", value: "перец", title: "перец"}
          ]} />

        <InputGroup type="checkbox" title="Мясо" onChange={this.onCheckboxInputChange} inputDataList={[
          {name: "Мясо", value: "бекон", title: "бекон"},
          {name: "Мясо", value: "пепперони", title: "пепперони"},
          {name: "Мясо", value: "ветчина", title: "ветчина"}
          ]} />

        <br></br>
      </form>
    )
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
                <ConstructorPage setCurrentOrder={setCurrentOrder} currentOrder={currentOrder} />
              )
            }
          }
        </CurrentOrderContext.Consumer>
    )
  }
}

export default CurrentOrderDecorator;
