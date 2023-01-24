import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { headerFontSize } from "../constants";
import { Bar, Line } from "../Graphs";

export const Goals = () => {
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
          Pages Read
        </Typography>
        <Line />
        <Typography variant="h6" sx={{ fontSize: headerFontSize }}>
          Meetings Attended
        </Typography>
        <Bar />
      </Box>
    </Box>
  );
};
