import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Typography, useTheme } from "@mui/material";

export const InteractiveDeleteIcon = ({
  isUserConfirmingDelete,
  onConfirm,
  onDelete,
}) => {
  const theme = useTheme();
  return (
    <>
      <DeleteOutlineIcon
        sx={{
          cursor: "pointer",
          fontSize: "1.1rem",
          color: isUserConfirmingDelete
            ? theme.palette.primary.main
            : theme.palette.grey[400],
          "&:hover": {
            color: isUserConfirmingDelete
              ? theme.palette.primary.main
              : theme.palette.grey[900],
          },
        }}
        onClick={() => (isUserConfirmingDelete ? onDelete() : onConfirm())}
      />
      {isUserConfirmingDelete && (
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
      )}
    </>
  );
};
