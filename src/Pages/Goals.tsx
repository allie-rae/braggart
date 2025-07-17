import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Bar } from "../Graphs";
import { useContext } from "react";
import { BragContext } from "../Contexts";
import { Link } from "react-router-dom";

export const Goals = () => {
  const [brags] = useContext(BragContext);

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
        <Bar title="Number of Accomplishments By Category" brags={brags} />
        {!brags.length && (
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
              Nothing to brag about yet!
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Use <Link to="/">this form</Link> to become a braggart.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
