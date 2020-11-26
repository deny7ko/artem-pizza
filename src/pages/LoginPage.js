import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <h2>Login</h2>
      <h3>or <Link to="/register">register</Link></h3>
      <form>
        <div>
          <label htmlFor="login">Login</label>
          <input type="text" required placeholde="login" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" required />
        </div>
        <div>
          <input data-testid="login-page-submit" type="submit" value="Submit"></input>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
