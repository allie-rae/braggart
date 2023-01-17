import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Navigation } from "./Navigation";

function App() {
  const theme = useTheme();
  return (
    <div>
      <Navigation />
      <Typography
        variant="h1"
        sx={{
          color: theme.palette.secondary.main,
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        Hi mom!!
      </Typography>
    </div>
  );
}

export default App;
