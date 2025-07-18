import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Bar } from "../Graphs";
import { useContext } from "react";
import { BragContext } from "../Contexts";
import { NoBragsFound } from "../NoBragsFound";

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
        {!brags.length && <NoBragsFound />}
      </Box>
    </Box>
  );
};
