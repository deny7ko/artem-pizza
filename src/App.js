import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummaryPage from "./pages/OrderSummaryPage"
import OrderListPage from "./pages/OrderListPage"
import ConstructorPage from "./pages/ConstructorPage"
import {useOrderContext} from "./contexts/OrderContext"
import Layout from './Layout'

const App = () => {
  const {order, updateOrder} = useOrderContext()

  return (
  <Router>
    <Layout>
      <Route exact path="/register">
        <RegisrationPage />
      </Route>

      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/checkout">
        <CheckoutPage order={order} updateOrderContext={updateOrder} />
      </Route>

      <Route exact path="/order-summary">
        <OrderSummaryPage order={order} />
      </Route>

      <Route exact path="/order-list">
        <OrderListPage />
      </Route>

      <Route exact path="/constructor">
        <ConstructorPage updateOrderContext={updateOrder} />
      </Route>
    </Layout>
  </Router>
  )
}

export default App;
