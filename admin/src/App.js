import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductCreationPage from './pages/ProductCreationPage'

const App = () => {
  return (
  <Router>
    <Route exact path="/admin">
      <ProductCreationPage />
    </Route>
  </Router>
  )
}

export default App
