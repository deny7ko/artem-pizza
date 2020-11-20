import React from "react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <h3>or <Link to="/register">register</Link></h3>
        <form>
          <div>
            <label for="login">Login</label>
            <input type="text" required placeholde="login" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" required />
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </>
    );
  }
}

export default LoginPage;
