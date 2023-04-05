import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Bar, Line } from "../Graphs";

export const Goals = () => {
  return (
    <Box sx={{ marginBottom: 3, maxWidth: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Goal Visualization
        </Typography>
        <Bar title="Number of Accomplishments By Category" />
        <Line title="Number of Pages Read" />
      </Box>
    </Box>
  );
};
