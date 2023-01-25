import { Fade } from "@mui/material";
import { Box } from "@mui/system";

import { transitionTime } from "../constants";

export const GraphWrapper = ({ fadeInCondition, children }) => {
  return (
    <Fade in={fadeInCondition} timeout={{ enter: transitionTime }}>
      <Box
        sx={{
          width: "100%",
          height: "350px",
          marginBottom: 4,
          background: "white",
          padding: ".5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 20px 10px rgba(0,0,0,.05)",
        }}
      >
        <Box
          sx={{
            height: "calc(100% - 28px)",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Fade>
  );
};
