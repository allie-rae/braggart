import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useTheme } from "@mui/material";

export const InteractiveEditIcon = ({
  isEditTriggered,
  turnOnEdit,
  turnOffEdit,
}) => {
  const theme = useTheme();
  return (
    <DriveFileRenameOutlineIcon
      sx={{
        cursor: "pointer",
        fontSize: "1.1rem",
        color: isEditTriggered
          ? theme.palette.secondary.main
          : theme.palette.grey[400],
        "&:hover": {
          color: isEditTriggered
            ? theme.palette.secondary.main
            : theme.palette.grey[900],
        },
      }}
      onClick={() => (isEditTriggered ? turnOffEdit() : turnOnEdit())}
    />
  );
};
