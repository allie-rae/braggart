import { Box, Typography } from "@mui/material";

export const NoBragsFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        No brags found!
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Brag your heart out, then check back here!
      </Typography>
    </Box>
  );
};
