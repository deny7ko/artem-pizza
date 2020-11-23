import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummaryPage from "./pages/OrderSummaryPage"
import OrderListPage from "./pages/OrderListPage"
import ConstructorPage from "./pages/ConstructorPage"
import { CurrentOrderProvider } from "./contexts/CurrentOrderContext"

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
        <nav>
          <p>
            <Link to="/register">Register</Link> or <Link to="/login">Login</Link>
          </p>

          <p>
            <Link to="/constructor">Select Pizza</Link>
          </p>
        </nav>
        {this.props.children}
      </div>

    );
  }
}

const App = () => (
  <Router>
    <CurrentOrderProvider>
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

        <Route exact path="/order-summary">
          <OrderSummaryPage />
        </Route>

        <Route exact path="/order-list">
          <OrderListPage />
        </Route>

        <Route exact path="/constructor">
          <ConstructorPage />
        </Route>
      </Main>
    </CurrentOrderProvider>
  </Router>
);

export default App;
