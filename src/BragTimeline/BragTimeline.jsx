import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Chip, Fade, Stack, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

import { transitionTime } from "../constants";
import { InteractiveDeleteIcon } from "../InteractiveDeleteIcon";
import { InteractiveEditIcon } from "../InteractiveEditIcon";
import { formatTimestampDayMonthHourMinute } from "../utils/formatTimestamp";
import AddIcon from "@mui/icons-material/Add";

export const BragTimeline = ({ listOfAccomplishments, setListOfAccomplishments }) => {
  const theme = useTheme();
  const [isUserEditing, setIsUserEditing] = useState(null);
  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const [categoriesAddedString, setCategoriesAddedString] = useState("");
  const [categoriesAddedList, setCategoriesAddedList] = useState([]);

  const onTurnOffEdit = (accomplishmentIndex) => {
    const copyOfAccomplishments = [...listOfAccomplishments];
    copyOfAccomplishments[accomplishmentIndex].categories.push(...categoriesAddedList);
    setListOfAccomplishments(copyOfAccomplishments);
    setCategoriesAddedString("");
    setCategoriesAddedList([]);
    setIsUserAddingCategory(false);
    setIsUserEditing(null);
  };

  const onChangeCategory = (e) => {
    const categories = e.target.value.trim().split(/[ ,]+/).filter(Boolean);
    setCategoriesAddedString(e.target.value);
    setCategoriesAddedList(categories);
  };

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
            <Fade in timeout={transitionTime} key={`${i}-${accomplishment.title}`}>
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
                              const copyOfAccomplishments = [...listOfAccomplishments];
                              copyOfAccomplishments.splice(i, 1, {
                                ...accomplishment,
                                headline: e.target.value,
                              });
                              setListOfAccomplishments(copyOfAccomplishments);
                            }}
                            onKeyDown={(e) => e.key === "Enter" && setIsUserEditing(false)}
                          />
                        </Fade>
                      )}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <InteractiveEditIcon
                        turnOnEdit={() => setIsUserEditing(accomplishment.id)}
                        turnOffEdit={() => onTurnOffEdit(i)}
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
                          const copyOfAccomplishments = [...listOfAccomplishments];
                          copyOfAccomplishments.splice(i, 1, {
                            ...accomplishment,
                            body: e.target.value,
                          });
                          setListOfAccomplishments(copyOfAccomplishments);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && setIsUserEditing(false)}
                      />
                    </Fade>
                  )}
                  <Box>
                    {isUserEditing !== accomplishment.id &&
                      accomplishment.categories.map((category, catIndex) => {
                        return (
                          <Fade in key={`${catIndex}-${category}`} timeout={transitionTime}>
                            <Chip
                              label={category}
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, mb: 1, mr: 1 }}
                            />
                          </Fade>
                        );
                      })}
                    {isUserEditing === accomplishment.id &&
                      accomplishment.categories.map((category, catIndex) => {
                        return (
                          <Fade in key={`${catIndex}-${category}`} timeout={transitionTime}>
                            <Chip
                              label={category}
                              variant="outlined"
                              size="small"
                              sx={{ mt: 1, mb: 1, mr: 1 }}
                              onDelete={() => {
                                const copyOfCategories = [...listOfAccomplishments[i].categories];
                                copyOfCategories.splice(catIndex, 1);
                                const copyOfAccomplishments = [...listOfAccomplishments];
                                copyOfAccomplishments.splice(i, 1, {
                                  ...copyOfAccomplishments[i],
                                  categories: copyOfCategories,
                                });
                                setListOfAccomplishments(copyOfAccomplishments);
                              }}
                            />
                          </Fade>
                        );
                      })}
                    {isUserEditing === accomplishment.id && (
                      <Chip
                        label="Add New Categories"
                        variant="outlined"
                        size="small"
                        sx={{ mt: 1, mb: 1, mr: 1 }}
                        icon={<AddIcon />}
                        onClick={() => setIsUserAddingCategory(true)}
                      />
                    )}
                    {isUserEditing === accomplishment.id &&
                      isUserAddingCategory &&
                      categoriesAddedList.map((addedCat, addedCatIndex) => {
                        return (
                          <Chip
                            key={`${addedCatIndex}-${addedCat}`}
                            label={addedCat}
                            variant="outlined"
                            size="small"
                            sx={{ mt: 1, mb: 1, mr: 1 }}
                            icon={<AddIcon />}
                          />
                        );
                      })}
                    {isUserEditing === accomplishment.id && isUserAddingCategory && (
                      <Box sx={{ display: "block" }}>
                        <Fade in timeout={transitionTime}>
                          <TextField
                            variant="outlined"
                            label="Add Categories"
                            placeholder={"Add new categories here..."}
                            value={categoriesAddedString}
                            sx={{ minWidth: "275px", mb: 1 }}
                            onChange={(e) => onChangeCategory(e)}
                          />
                        </Fade>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Fade>
          );
        })}
      </Stack>
    </Box>
  );
};
