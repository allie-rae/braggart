import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const FullPageLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
