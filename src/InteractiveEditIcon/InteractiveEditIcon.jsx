import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Fade, useTheme } from "@mui/material";

import { transitionTime } from "../constants";

export const InteractiveEditIcon = ({ isEditTriggered, turnOnEdit, turnOffEdit }) => {
  const theme = useTheme();
  return (
    <>
      {!isEditTriggered && (
        <Fade in timeout={transitionTime}>
          <DriveFileRenameOutlineIcon
            data-testid="edit-pencil-icon"
            sx={{
              cursor: "pointer",
              color: theme.palette.grey[600],
              "&:hover": {
                color: theme.palette.common.black,
              },
            }}
            onClick={() => turnOnEdit()}
          />
        </Fade>
      )}
      {isEditTriggered && (
        <Fade in timeout={transitionTime}>
          <SaveIcon
            data-testid="save-edit-icon"
            sx={{
              cursor: "pointer",
              color: theme.palette.primary.main,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
            onClick={() => turnOffEdit()}
          />
        </Fade>
      )}
    </>
  );
};
