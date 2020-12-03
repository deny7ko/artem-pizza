import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={{ padding: "2em" }}>
      <nav>
        <p>
          <Link to="/admin/topping-list">Topping List</Link>
        </p>
      </nav>

      {children}
    </div>
  );
}

export default Layout
