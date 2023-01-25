import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { headerFontSize } from "../constants";

export const Account = () => {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: headerFontSize }}>
          Account Settings
        </Typography>
      </Box>
    </Box>
  );
};
