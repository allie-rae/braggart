import { Box, Chip, Fade, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

import { transitionTime } from "../constants";
import { InteractiveDeleteIcon } from "../InteractiveDeleteIcon";
import { InteractiveEditIcon } from "../InteractiveEditIcon";
import { formatTimestampDayMonthHourMinute } from "../utils/formatTimestamp";
import AddIcon from "@mui/icons-material/Add";
import { BragContext } from "../Contexts/BragContext";

export const BragTimeline = () => {
  const [brags, setBrags] = useContext(BragContext);
  const [isUserEditing, setIsUserEditing] = useState(null);
  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const [categoriesAddedString, setCategoriesAddedString] = useState("");
  const [categoriesAddedList, setCategoriesAddedList] = useState([]);

  const onTurnOffEdit = (accomplishmentIndex) => {
    const copyOfAccomplishments = [...brags];
    copyOfAccomplishments[accomplishmentIndex].categories.push(...categoriesAddedList);
    setBrags(copyOfAccomplishments);
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

  const isUserEditingThisAccomplishment = (accomplishmentId) => {
    if (isUserEditing === accomplishmentId) {
      return true;
    }
    return false;
  };

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "700px",
      }}
    >
      {brags.map((accomplishment, i) => {
        return (
          <Fade in timeout={transitionTime} key={`${i}-${accomplishment.title}`}>
            <Box
              sx={{
                border: "6px solid",
                borderColor: "grey.300",
                borderRadius: "20px",
                mt: 4,
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="caption" sx={{ mb: 0.5 }}>
                  {formatTimestampDayMonthHourMinute(accomplishment.timestamp)}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", minWidth: "48px", ml: 1 }}>
                  <InteractiveEditIcon
                    turnOnEdit={() => setIsUserEditing(accomplishment.id)}
                    turnOffEdit={() => onTurnOffEdit(i)}
                    isEditTriggered={isUserEditing === accomplishment.id}
                  />
                  <InteractiveDeleteIcon
                    onDelete={() => {
                      setBrags(brags.filter((accomp) => accomp.id !== accomplishment.id));
                    }}
                  />
                </Box>
              </Box>

              {isUserEditing !== accomplishment.id && (
                <Typography variant="h6">{accomplishment.headline}</Typography>
              )}
              {isUserEditingThisAccomplishment(accomplishment.id) && (
                <Fade in timeout={transitionTime}>
                  <TextField
                    label="Headline"
                    variant="outlined"
                    placeholder={"Type your headline here..."}
                    value={accomplishment.headline}
                    sx={{ minWidth: "275px", width: "100%", mt: 1.5 }}
                    onChange={(e) => {
                      const copyOfAccomplishments = [...brags];
                      copyOfAccomplishments.splice(i, 1, {
                        ...accomplishment,
                        headline: e.target.value,
                      });
                      setBrags(copyOfAccomplishments);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && setIsUserEditing(false)}
                  />
                </Fade>
              )}
              {!isUserEditingThisAccomplishment(accomplishment.id) && (
                <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
                  {accomplishment.body}
                </Typography>
              )}
              {isUserEditingThisAccomplishment(accomplishment.id) && (
                <Fade in timeout={transitionTime}>
                  <TextField
                    variant="outlined"
                    label="Brag"
                    placeholder={"Write about your accomplishment here..."}
                    value={accomplishment.body}
                    multiline
                    sx={{ minWidth: "275px", width: "100%", mt: 1.5 }}
                    onChange={(e) => {
                      const copyOfAccomplishments = [...brags];
                      copyOfAccomplishments.splice(i, 1, {
                        ...accomplishment,
                        body: e.target.value,
                      });
                      setBrags(copyOfAccomplishments);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && setIsUserEditing(false)}
                  />
                </Fade>
              )}
              <Box>
                {!isUserEditingThisAccomplishment(accomplishment.id) &&
                  accomplishment.categories.map((category, catIndex) => {
                    return (
                      <Fade in key={`${catIndex}-${category}`} timeout={transitionTime}>
                        <Chip label={category} variant="outlined" sx={{ mr: 1, mt: 1.5 }} />
                      </Fade>
                    );
                  })}
                {isUserEditingThisAccomplishment(accomplishment.id) &&
                  accomplishment.categories.map((category, catIndex) => {
                    return (
                      <Fade in key={`${catIndex}-${category}`} timeout={transitionTime}>
                        <Chip
                          label={category}
                          variant="outlined"
                          sx={{ mr: 1, mt: 1.5 }}
                          onDelete={() => {
                            const copyOfCategories = [...brags[i].categories];
                            copyOfCategories.splice(catIndex, 1);
                            const copyOfAccomplishments = [...brags];
                            copyOfAccomplishments.splice(i, 1, {
                              ...copyOfAccomplishments[i],
                              categories: copyOfCategories,
                            });
                            setBrags(copyOfAccomplishments);
                          }}
                        />
                      </Fade>
                    );
                  })}
                {isUserEditingThisAccomplishment(accomplishment.id) && !isUserAddingCategory && (
                  <Box sx={{ display: "block" }}>
                    <Fade in timeout={transitionTime}>
                      <Chip
                        label="Add New Categories"
                        variant="outlined"
                        sx={{ mr: 1, mt: 1.5 }}
                        icon={<AddIcon />}
                        onClick={() => setIsUserAddingCategory(true)}
                      />
                    </Fade>
                  </Box>
                )}
                {isUserEditingThisAccomplishment(accomplishment.id) &&
                  isUserAddingCategory &&
                  categoriesAddedList.map((addedCategory, addedCatIndex) => {
                    return (
                      <Chip
                        key={`${addedCatIndex}-${addedCategory}`}
                        label={addedCategory}
                        variant="outlined"
                        sx={{ mr: 1, mt: 1.5 }}
                        icon={<AddIcon />}
                      />
                    );
                  })}
                {isUserEditingThisAccomplishment(accomplishment.id) && isUserAddingCategory && (
                  <Box sx={{ display: "block" }}>
                    <Fade in timeout={transitionTime}>
                      <TextField
                        autoFocus
                        variant="outlined"
                        label="Add Categories"
                        placeholder={"Add new categories here..."}
                        value={categoriesAddedString}
                        sx={{ minWidth: "275px", mt: 1.5 }}
                        onChange={(e) => onChangeCategory(e)}
                      />
                    </Fade>
                  </Box>
                )}
              </Box>
            </Box>
          </Fade>
        );
      })}
    </Box>
  );
};
