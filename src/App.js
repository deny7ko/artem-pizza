import React from 'react';
import './App.css';
import Constructor from './Constructor'
import Summary from './Summary'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state        = {
      showSummaryPage: false,
      showConstructorPage: true,
      selectedIngredients: {},
      totalPrice: 0
    }
  }

  handleSubmit = ({ selectedIngredients, totalPrice }) => {
    this.setState({
      showSummaryPage: true,
      showConstructorPage: false,
      selectedIngredients: selectedIngredients,
      totalPrice: totalPrice
    })
  }

  render() {
    return <div style={{padding: "2em"}}>
      <h1>🍕Собери пиццу сам!🍕</h1>
      {this.state.showConstructorPage && <Constructor onSubmit={this.handleSubmit} />}
      {this.state.showSummaryPage && <Summary selectedIngredients={this.state.selectedIngredients} totalPrice={this.state.totalPrice} />}
    </div>
  }
}

export default App;
