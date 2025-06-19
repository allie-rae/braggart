import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Fade, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import { transitionTime } from "../constants";

interface InteractiveDeleteIconProps {
  onDelete: () => void;
}

export const InteractiveDeleteIcon = ({ onDelete }: InteractiveDeleteIconProps) => {
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
            color: isUserConfirmingDelete ? "primary.main" : theme.palette.grey[600],
            "&:hover": {
              color: isUserConfirmingDelete ? "primary.main" : "common.black",
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
            variant="h6"
            color="primary"
            sx={{
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
