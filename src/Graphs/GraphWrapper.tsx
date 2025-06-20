import { Fade } from "@mui/material";
import { Box } from "@mui/system";

import { transitionTime } from "../constants";

interface GraphWrapperProps {
  fadeInCondition: boolean;
  children: React.ReactNode;
}

export const GraphWrapper = ({ fadeInCondition, children }: GraphWrapperProps) => {
  return (
    <Fade in={fadeInCondition} timeout={{ enter: transitionTime }}>
      <Box
        sx={{
          marginBottom: 4,
          background: "white",
          padding: ".5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 20px 10px rgba(0,0,0,.05)",
          width: "90%",
          maxWidth: "600px",
          minWidth: "200px",
          height: "350px",
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
