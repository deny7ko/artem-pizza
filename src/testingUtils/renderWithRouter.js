import React from "react";
import { Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route exact path="/">
          {ui}
        </Route>
        <Route exact path="/checkout"></Route>
      </Router>
    ),
    history,
  };
}

export default renderWithRouter;
