import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './Layout'
import ProductCreationPage from './ProductCreationPage'

function App() {const App = () => {
  return (
  <Router>
    <Layout>
      <Route exact path="/admin">
        <h1>Hello Admin</h1>
      </Route>
    </Layout>
  </Router>
  )
}

export default App;
