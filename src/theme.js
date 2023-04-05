import "./index.css";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#5200CC",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#B800CC",
      contrastText: "#FFF",
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
    caption: {
      fontSize: "0.8125rem",
    },
    h6: {
      fontSize: "1.1rem",
      marginTop: "0.25rem",
      marginBottom: "0.25rem",
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
  },
};
