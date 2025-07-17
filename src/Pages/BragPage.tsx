import { Box } from "@mui/system";

import { BragForm } from "../BragForm";
import { BragTimeline } from "../BragTimeline";
import { useContext } from "react";
import { BragContext } from "../Contexts";

export const BragPage = () => {
  const [brags, setBrags] = useContext(BragContext);
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
        <BragForm brags={brags} setBrags={setBrags} />
        <BragTimeline brags={brags} setBrags={setBrags} />
      </Box>
    </Box>
  );
};
