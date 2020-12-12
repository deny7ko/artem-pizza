import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={{ padding: "2em" }}>
      <nav>
        <p>
          <Link to="/admin/ingredient-list">Ingredient List</Link>
        </p>

        <p>
          <Link to="/admin/ingredients/new">Create Ingredient</Link>
        </p>
      </nav>

      {children}
    </div>
  );
}

export default Layout
