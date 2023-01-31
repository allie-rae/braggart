import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Fade, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

import { transitionTime } from "../constants";

export const InteractiveDeleteIcon = ({ onDelete }) => {
  const theme = useTheme();
  const [isUserConfirmingDelete, setIsUserConfirmingDelete] = useState(false);

  useEffect(() => {
    if (isUserConfirmingDelete) {
      const timer = setTimeout(() => {
        setIsUserConfirmingDelete(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isUserConfirmingDelete]);

  const onConfirmDelete = () => {
    onDelete();
    setIsUserConfirmingDelete(false);
  };

  return (
    <>
      <Fade in timeout={transitionTime}>
        <DeleteOutlineIcon
          data-testid="interactive-delete-icon"
          sx={{
            cursor: "pointer",
            fontSize: "1.1rem",
            color: isUserConfirmingDelete ? theme.palette.primary.main : theme.palette.grey[600],
            "&:hover": {
              color: isUserConfirmingDelete
                ? theme.palette.primary.main
                : theme.palette.common.black,
            },
          }}
          onClick={() =>
            isUserConfirmingDelete ? onConfirmDelete() : setIsUserConfirmingDelete(true)
          }
        />
      </Fade>
      {isUserConfirmingDelete && (
        <Fade in timeout={transitionTime}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 800,
              color: theme.palette.primary.main,
              cursor: "pointer",
            }}
            onClick={() => onConfirmDelete()}
          >
            ?
          </Typography>
        </Fade>
      )}
    </>
  );
};
