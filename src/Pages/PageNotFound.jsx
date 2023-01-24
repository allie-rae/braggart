import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  const theme = useTheme();
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
      <ErrorIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
      <Typography variant="h6">Page not found</Typography>
      <Typography variant="body1">
        <Link to="/timeline">Head back to your timeline</Link>
      </Typography>
    </Box>
  );
};
