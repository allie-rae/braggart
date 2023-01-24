import { Typography } from "@mui/material";
import { Box } from "@mui/system";

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
        <Typography variant="h6">Goals</Typography>
      </Box>
    </Box>
  );
};
