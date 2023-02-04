import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

import { Navigation } from "./Navigation";

function App() {
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
}

export default App;
