import { createStore, combineReducers, applyMiddleware } from "redux";
import { ingredientsReducer } from "state/ingredients/ingredientsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
  }),
  enhancer
);
