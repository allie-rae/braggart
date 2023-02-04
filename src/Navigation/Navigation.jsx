import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const isUserLoggedIn = true;
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            braggart
          </Typography>
          {!isUserLoggedIn && <Button color="inherit">Login</Button>}
          {isUserLoggedIn && (
            <Box>
              <IconButton
                color="inherit"
                size="large"
                edge="end"
                aria-label="account"
                onClick={() => navigate("/")}
              >
                <ViewTimelineIcon />
              </IconButton>
              <IconButton
                color="inherit"
                size="large"
                edge="end"
                aria-label="account"
                onClick={() => navigate("goals")}
              >
                <AutoGraphIcon />
              </IconButton>
              <IconButton
                color="inherit"
                size="large"
                edge="end"
                aria-label="account"
                onClick={() => navigate("account")}
              >
                <AccountBoxIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
