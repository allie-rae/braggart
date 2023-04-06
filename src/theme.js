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
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1.2rem",
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: "10px",
          border: "2px solid",
          borderColor: "#bdbdbd",
        },
      },
    },
  },
};
