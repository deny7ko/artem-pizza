import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummaryPage: false,
      showConstructorPage: true,
      selectedIngredients: {},
      totalPrice: 0,
    };
  }

  handleSubmit = ({ selectedIngredients, totalPrice }) => {
    this.setState({
      showSummaryPage: true,
      showConstructorPage: false,
      selectedIngredients: selectedIngredients,
      totalPrice: totalPrice,
    });
  };

  render() {
    return (
      <div style={{ padding: "2em" }}>
        {this.props.children}
      </div>

    );
  }
}

const App = () => (
  <Router>
    <Main>
      <Route exact path="/register">
        <RegisrationPage />
      </Route>

      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/checkout">
        <CheckoutPage />
      </Route>

      {/* <Route exact path="/constructor">
        <Constructor onSubmit={this.handleSubmit} />
      </Route>

      <Route exact path="/summary">
        <Summary
            selectedIngredients={this.state.selectedIngredients}
            totalPrice={this.state.totalPrice}
          />
      </Route> */}
    </Main>
  </Router>
);

export default App;
