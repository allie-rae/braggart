import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { BragContextProvider } from "./Contexts/BragContext";

import { Navigation } from "./Navigation";

function App() {
  return (
    <Box>
      <BragContextProvider>
        <Navigation />
        <Outlet />
      </BragContextProvider>
    </Box>
  );
}

export default App;
