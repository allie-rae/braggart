import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { themeOptions } from "./theme";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const customTheme = createTheme(themeOptions);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={customTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
