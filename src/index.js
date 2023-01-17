import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { themeOptions } from "./theme";

const customTheme = createTheme(themeOptions);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
