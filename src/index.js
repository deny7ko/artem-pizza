import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { OrderProvider } from "./contexts/OrderContext";
import { store } from "./store";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
// import Counter from "./Counter/Counter";
// import { store } from "./Counter/store";

Sentry.init({
  dsn:
    "https://32fa9f565af34bc9814055dd69418e0c@o499892.ingest.sentry.io/5578929",
  release: process.env.REACT_APP_SENTRY_RELEASE,
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OrderProvider>
        <App />
      </OrderProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
