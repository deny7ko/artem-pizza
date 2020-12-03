import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './Layout'
import ToppingListPage from './pages/ToppingListPage'
import IngredientCreatePage from './pages/IngredientCreatePage'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/admin">
        </Route>

        <Route exact path="/admin/ingredients/new">
          <IngredientCreatePage />
        </Route>

        <Route exact path="/admin/topping-list">
          <ToppingListPage />
        </Route>
      </Layout>
    </Router>
  )
}

export default App
