import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './Layout'
import IngredientListPage from './pages/IngredientListPage'
import IngredientCreatePage from './pages/IngredientCreatePage'
import IngredientEditPage from './pages/IngredientEditPage'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/admin">
        </Route>

        <Route exact path="/admin/ingredients/new">
          <IngredientCreatePage />
        </Route>

        <Route exact path="/admin/ingredient-list">
          <IngredientListPage />
        </Route>

        <Route exact path="/admin/ingredients/:id/edit">
          <IngredientEditPage />
        </Route>
      </Layout>
    </Router>
  )
}

export default App
