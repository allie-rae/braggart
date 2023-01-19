import "./index.css";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#74a63c",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#E5AA29",
      contrastText: "#ffffff",
    },
    grey: {
      grey80: "rgba(0, 0, 0, 0.8)",
      grey40: "rgba(0, 0, 0, 0.4)",
      grey20: "rgba(0, 0, 0, 0.2)",
    },
    error: {
      main: "#e02118",
    },
    divider: "#000000",
    warning: {
      main: "#b19107",
    },
    info: {
      main: "#4b8faa",
    },
    success: {
      main: "#0a9205",
    },
  },
  typography: {
    fontFamily: [
      "Ubuntu",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};
