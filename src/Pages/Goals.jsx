import { Box } from "@mui/system";

import { Bar, Line } from "../Graphs";

export const Goals = () => {
  return (
    <Box sx={{ marginBottom: 3, display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
          width: "600px",
          maxWidth: "90%",
          minWidth: "300px",
        }}
      >
        <Line title="Number of Pages Read" />
        <Bar title="Number of Meetings Attended" />
      </Box>
    </Box>
  );
};
