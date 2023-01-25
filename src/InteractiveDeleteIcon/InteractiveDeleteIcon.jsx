import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Fade, Typography, useTheme } from "@mui/material";

import { transitionTime } from "../constants";

export const InteractiveDeleteIcon = ({
  isUserConfirmingDelete,
  onConfirm,
  onDelete,
}) => {
  const theme = useTheme();
  return (
    <>
      <Fade in timeout={transitionTime}>
        <DeleteOutlineIcon
          sx={{
            cursor: "pointer",
            fontSize: "1.1rem",
            color: isUserConfirmingDelete
              ? theme.palette.primary.main
              : theme.palette.grey[600],
            "&:hover": {
              color: isUserConfirmingDelete
                ? theme.palette.primary.main
                : theme.palette.common.black,
            },
          }}
          onClick={() => (isUserConfirmingDelete ? onDelete() : onConfirm())}
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
            onClick={() => onDelete()}
          >
            ?
          </Typography>
        </Fade>
      )}
    </>
  );
};
