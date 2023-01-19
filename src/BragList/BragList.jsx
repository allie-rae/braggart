import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { format } from "date-fns";
import React from "react";

export const BragList = ({ listOfAccomplishments }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        maxWidth: "600px",
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3,
      }}
    >
      <Stack spacing={3}>
        {listOfAccomplishments.map((accomplishment, i) => {
          return (
            <Box
              key={`${i}-${accomplishment.title}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="overline">
                {format(
                  new Date(accomplishment.timestamp),
                  "E MMM dd @ h:mm b"
                )}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon
                    sx={{
                      marginRight: 0.6,
                      color: theme.palette.primary.main,
                      fontSize: "1.1rem",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                    {accomplishment.headline}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ marginLeft: "23px" }}>
                  {accomplishment.body}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
