import { Box } from "@mui/system";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Navigation } from "./Navigation";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("timeline");
    // eslint-disable-next-line
  }, []);
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
}

export default App;
