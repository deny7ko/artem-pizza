import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
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
      {children}
    </div>

  );
}

export default Layout
