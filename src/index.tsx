import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ClerkProvider } from "@clerk/clerk-react";

const container = document.getElementById("root");
// @ts-ignore
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ClerkProvider
      scriptUrl={"https://js.lclclerk.com/npm/clerk.browser.js"}
      frontendApi={"clerk.nov0t.k4358.dev.lclclerk.com"}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
