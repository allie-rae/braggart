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
          ? theme.palette.primary.main
          : theme.palette.grey[600],
        "&:hover": {
          color: isEditTriggered
            ? theme.palette.primary.main
            : theme.palette.common.black,
        },
      }}
      onClick={() => (isEditTriggered ? turnOffEdit() : turnOnEdit())}
    />
  );
};
