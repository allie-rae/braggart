import { Box } from "@mui/system";

import { BragForm } from "../BragForm";
import { BragTimeline } from "../BragTimeline";

export const BragPage = () => {
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
        <BragForm />
        <BragTimeline />
      </Box>
    </Box>
  );
};
