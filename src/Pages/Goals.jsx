import { Typography } from "@mui/material";
import { Box } from "@mui/system";

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
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Pages Read
        </Typography>
        <Box sx={{ height: "300px", width: "300px", marginBottom: 2 }}>
          <Line />
        </Box>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Meetings Attended
        </Typography>
        <Box sx={{ height: "300px", width: "300px" }}>
          <Bar />
        </Box>
      </Box>
    </Box>
  );
};
