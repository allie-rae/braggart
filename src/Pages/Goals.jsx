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
        <Line />
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Meetings Attended
        </Typography>
        <Bar />
      </Box>
    </Box>
  );
};
