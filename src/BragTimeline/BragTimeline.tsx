import { Box, Chip, Fade, TextField, Typography } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";

import { transitionTime } from "../constants";
import { InteractiveDeleteIcon } from "../InteractiveDeleteIcon";
import { InteractiveEditIcon } from "../InteractiveEditIcon";
import { formatTimestampDayMonthHourMinute } from "../utils/formatTimestamp";
import AddIcon from "@mui/icons-material/Add";
import { BragContext } from "../Contexts";

export const BragTimeline = () => {
  const [brags, setBrags] = useContext(BragContext);
  const [isUserEditing, setIsUserEditing] = useState<boolean | null | number>(null);
  const [isUserAddingCategory, setIsUserAddingCategory] = useState(false);
  const [categoriesAddedString, setCategoriesAddedString] = useState("");
  const [categoriesAddedList, setCategoriesAddedList] = useState<string[] | []>([]);

  const onTurnOffEdit = (bragIndex: number) => {
    const copyOfBrags = [...brags];
    copyOfBrags[bragIndex].categories.push(...categoriesAddedList);
    setBrags(copyOfBrags);
    setCategoriesAddedString("");
    setCategoriesAddedList([]);
    setIsUserAddingCategory(false);
    setIsUserEditing(null);
  };

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const categories = e.target.value.trim().split(/[ ,]+/).filter(Boolean);
    setCategoriesAddedString(e.target.value);
    setCategoriesAddedList(categories);
  };

  const isUserEditingThisBrag = (bragId: number) => {
    if (isUserEditing === bragId) {
      return true;
    }
    return false;
  };

  if (!brags.length) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          You haven&apos;t bragged yet!
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Use the form above to become a braggart.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "700px",
      }}
    >
      {brags.map((brag, i: number) => {
        return (
          <Fade in timeout={transitionTime} key={`${i}-${brag.id}`}>
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
                  {formatTimestampDayMonthHourMinute(brag.timestamp)}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", minWidth: "48px", ml: 1 }}>
                  <InteractiveEditIcon
                    turnOnEdit={() => setIsUserEditing(brag.id)}
                    turnOffEdit={() => onTurnOffEdit(i)}
                    isEditTriggered={isUserEditing === brag.id}
                  />
                  <InteractiveDeleteIcon
                    onDelete={() => {
                      setBrags(brags.filter((accomp) => accomp.id !== brag.id));
                    }}
                  />
                </Box>
              </Box>

              {isUserEditing !== brag.id && <Typography variant="h6">{brag.headline}</Typography>}
              {isUserEditingThisBrag(brag.id) && (
                <Fade in timeout={transitionTime}>
                  <TextField
                    label="Headline"
                    variant="outlined"
                    placeholder={"Type your headline here..."}
                    value={brag.headline}
                    sx={{ minWidth: "275px", width: "100%", mt: 1.5 }}
                    onChange={(e) => {
                      const copyOfBrags = [...brags];
                      copyOfBrags.splice(i, 1, {
                        ...brag,
                        headline: e.target.value,
                      });
                      setBrags(copyOfBrags);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && setIsUserEditing(false)}
                  />
                </Fade>
              )}
              {!isUserEditingThisBrag(brag.id) && (
                <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
                  {brag.body}
                </Typography>
              )}
              {isUserEditingThisBrag(brag.id) && (
                <Fade in timeout={transitionTime}>
                  <TextField
                    variant="outlined"
                    label="Brag"
                    placeholder={"Write about your accomplishment here..."}
                    value={brag.body}
                    multiline
                    sx={{ minWidth: "275px", width: "100%", mt: 1.5 }}
                    onChange={(e) => {
                      const copyOfBrags = [...brags];
                      copyOfBrags.splice(i, 1, {
                        ...brag,
                        body: e.target.value,
                      });
                      setBrags(copyOfBrags);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && setIsUserEditing(false)}
                  />
                </Fade>
              )}
              <Box>
                {!isUserEditingThisBrag(brag.id) &&
                  brag.categories.map((category, catIndex) => {
                    return (
                      <Fade in key={`${catIndex}-${category}`} timeout={transitionTime}>
                        <Chip label={category} variant="outlined" sx={{ mr: 1, mt: 1.5 }} />
                      </Fade>
                    );
                  })}
                {isUserEditingThisBrag(brag.id) &&
                  brag.categories.map((category, catIndex) => {
                    return (
                      <Fade in key={`${catIndex}-${category}`} timeout={transitionTime}>
                        <Chip
                          label={category}
                          variant="outlined"
                          sx={{ mr: 1, mt: 1.5 }}
                          onDelete={() => {
                            const copyOfCategories = [...brags[i].categories];
                            copyOfCategories.splice(catIndex, 1);
                            const copyOfBrags = [...brags];
                            copyOfBrags.splice(i, 1, {
                              ...copyOfBrags[i],
                              categories: copyOfCategories,
                            });
                            setBrags(copyOfBrags);
                          }}
                        />
                      </Fade>
                    );
                  })}
                {isUserEditingThisBrag(brag.id) && !isUserAddingCategory && (
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
                {isUserEditingThisBrag(brag.id) &&
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
                {isUserEditingThisBrag(brag.id) && isUserAddingCategory && (
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
