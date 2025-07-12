import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            braggart
          </Typography>
          {/* <Search /> */}
          <Box>
            <Button
              color="inherit"
              size="large"
              aria-label="account"
              onClick={() => navigate("/")}
              startIcon={<ViewTimelineIcon />}
            >
              Brags
            </Button>
            <Button
              color="inherit"
              size="large"
              aria-label="account"
              onClick={() => navigate("goals")}
              startIcon={<AutoGraphIcon />}
            >
              Visualization
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
