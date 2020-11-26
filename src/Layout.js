import React from "react";
import { Link } from "react-router-dom";

class Layout extends React.Component {
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

export default Layout
