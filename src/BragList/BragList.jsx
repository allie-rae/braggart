import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  Fade,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { transitionTime } from "../constants";
import { InteractiveDeleteIcon } from "../InteractiveDeleteIcon";
import { InteractiveEditIcon } from "../InteractiveEditIcon";
import { formatTimestampDayMonthHourMinute } from "../utils/formatTimestamp";

export const BragList = ({
  listOfAccomplishments,
  setListOfAccomplishments,
}) => {
  const theme = useTheme();
  const [isUserEditing, setIsUserEditing] = useState(null);

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "600px",
        marginTop: 3,
        marginLeft: 3,
        marginRight: 3,
      }}
    >
      <Stack spacing={3}>
        {listOfAccomplishments.map((accomplishment, i) => {
          return (
            <Fade
              in
              timeout={transitionTime}
              key={`${i}-${accomplishment.title}`}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="overline">
                  {formatTimestampDayMonthHourMinute(accomplishment.timestamp)}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {isUserEditing !== accomplishment.id && (
                        <>
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
                        </>
                      )}
                      {isUserEditing === accomplishment.id && (
                        <Fade in timeout={transitionTime}>
                          <TextField
                            label="Headline"
                            variant="outlined"
                            placeholder={"Type your headline here..."}
                            value={accomplishment.headline}
                            sx={{ minWidth: "275px", mb: 1 }}
                            onChange={(e) => {
                              const copyOfAccomplishments = [
                                ...listOfAccomplishments,
                              ];
                              copyOfAccomplishments.splice(i, 1, {
                                ...accomplishment,
                                headline: e.target.value,
                              });
                              setListOfAccomplishments(copyOfAccomplishments);
                            }}
                            onKeyDown={(e) =>
                              e.key === "Enter" && setIsUserEditing(false)
                            }
                          />
                        </Fade>
                      )}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <InteractiveEditIcon
                        turnOnEdit={() => setIsUserEditing(accomplishment.id)}
                        turnOffEdit={() => setIsUserEditing(null)}
                        isEditTriggered={isUserEditing === accomplishment.id}
                      />
                      <InteractiveDeleteIcon
                        onDelete={() => {
                          setListOfAccomplishments(
                            listOfAccomplishments.filter(
                              (accomp) => accomp.id !== accomplishment.id
                            )
                          );
                        }}
                      />
                    </Box>
                  </Box>
                  {isUserEditing !== accomplishment.id && (
                    <Typography variant="body2" sx={{ marginLeft: "23px" }}>
                      {accomplishment.body}
                    </Typography>
                  )}
                  {isUserEditing === accomplishment.id && (
                    <Fade in timeout={transitionTime}>
                      <TextField
                        variant="outlined"
                        label="Brag"
                        placeholder={"Write about your accomplishment here..."}
                        value={accomplishment.body}
                        multiline
                        sx={{ minWidth: "275px", mb: 1 }}
                        onChange={(e) => {
                          const copyOfAccomplishments = [
                            ...listOfAccomplishments,
                          ];
                          copyOfAccomplishments.splice(i, 1, {
                            ...accomplishment,
                            body: e.target.value,
                          });
                          setListOfAccomplishments(copyOfAccomplishments);
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" && setIsUserEditing(false)
                        }
                      />
                    </Fade>
                  )}
                </Box>
              </Box>
            </Fade>
          );
        })}
      </Stack>
    </Box>
  );
};
