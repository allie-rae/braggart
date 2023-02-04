import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { headerFontSize } from "../constants";

const stepNameMap = { 1: "Headline", 2: "Brag", 3: "Categorize" };

export const BragForm = ({ listOfAccomplishments, setListOfAccomplishments }) => {
  const [newAccomplishmentHeadline, setNewAccomplishmentHeadline] = useState("");
  const [newAccomplishmentBodyText, setNewAccomplishmentBodyText] = useState("");
  const [newAccomplishmentCategoriesString, setNewAccomplishmentCategoriesString] = useState("");
  const [newAccomplishmentCategoriesList, setNewAccomplishmentCategoriesList] = useState([]);
  const [step, setStep] = useState(1);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: headerFontSize, marginBottom: 1, textAlign: "center" }}
      >
        Step {step}: {stepNameMap[step]}
      </Typography>
      {step === 1 && (
        <TextField
          label="Type accomplishment here..."
          variant="outlined"
          placeholder="Type accomplishment here..."
          value={newAccomplishmentHeadline}
          sx={{ minWidth: "275px", maxWidth: "275px", mb: 1 }}
          onChange={(e) => setNewAccomplishmentHeadline(e.target.value)}
        />
      )}
      {step === 2 && (
        <TextField
          label="Time to brag..."
          variant="outlined"
          placeholder="Time to brag..."
          value={newAccomplishmentBodyText}
          multiline
          sx={{ minWidth: "275px", maxWidth: "275px", mb: 1 }}
          onChange={(e) => setNewAccomplishmentBodyText(e.target.value)}
        />
      )}
      {step === 3 && (
        <>
          <TextField
            label="Categorize..."
            variant="outlined"
            placeholder="Meetings, upskilling, productivity"
            value={newAccomplishmentCategoriesString}
            sx={{ minWidth: "275px", maxWidth: "275px", mb: 1 }}
            onChange={(e) => {
              const categories = e.target.value.trim().split(/[ ,]+/).filter(Boolean);
              setNewAccomplishmentCategoriesString(e.target.value);
              setNewAccomplishmentCategoriesList(categories);
            }}
          />
          <Box sx={{ mr: 1, mb: 1 }}>
            {newAccomplishmentCategoriesList.map((cat, catIdx) => (
              <Chip label={cat} key={`${catIdx}-${cat}`} size="small" />
            ))}
          </Box>
        </>
      )}
      <Button
        color="primary"
        variant="contained"
        size="medium"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => {
          if (step === 1) {
            if (newAccomplishmentHeadline.trim().length) {
              setStep(2);
            }
          }
          if (step === 2) {
            if (newAccomplishmentBodyText.trim().length) {
              setStep(3);
            }
          }
          if (step === 3) {
            setListOfAccomplishments([
              {
                headline: newAccomplishmentHeadline,
                body: newAccomplishmentBodyText,
                categories: newAccomplishmentCategoriesList,
                timestamp: Date.now(),
                id: Math.random() * 100000,
              },
              ...listOfAccomplishments,
            ]);
            setNewAccomplishmentHeadline("");
            setNewAccomplishmentBodyText("");
            setNewAccomplishmentCategoriesString("");
            setNewAccomplishmentCategoriesList([]);
            setStep(1);
          }
        }}
      >
        {stepNameMap[step]}
      </Button>
    </Box>
  );
};
