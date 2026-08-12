import { Box, Typography } from "@mui/material";

export const Error = () => {
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
        Whoops!
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Something went wrong—please try again.
      </Typography>
    </Box>
  );
};
