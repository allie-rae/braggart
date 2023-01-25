import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { headerFontSize } from "../constants";

const stepNameMap = { 1: "Headline", 2: "Brag" };

export const BragForm = ({
  listOfAccomplishments,
  setListOfAccomplishments,
}) => {
  const [newAccomplishmentHeadline, setNewAccomplishmentHeadline] =
    useState("");
  const [newAccomplishmentBodyText, setNewAccomplishmentBodyText] =
    useState("");
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
      <TextField
        label="Type accomplishment here..."
        variant="outlined"
        placeholder={
          step === 1 ? "Type accomplishment here..." : "Time to brag..."
        }
        value={
          step === 1 ? newAccomplishmentHeadline : newAccomplishmentBodyText
        }
        multiline={(step === 1 && false) || (step === 2 && true)}
        sx={{ minWidth: "275px", mb: 1 }}
        onChange={(e) => {
          if (step === 1) setNewAccomplishmentHeadline(e.target.value);
          if (step === 2) setNewAccomplishmentBodyText(e.target.value);
        }}
      />
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
            setListOfAccomplishments([
              {
                headline: newAccomplishmentHeadline,
                body: newAccomplishmentBodyText,
                timestamp: Date.now(),
                id: Math.random() * 10000,
              },
              ...listOfAccomplishments,
            ]);
            setNewAccomplishmentHeadline("");
            setNewAccomplishmentBodyText("");
            setStep(1);
          }
        }}
      >
        {stepNameMap[step]}
      </Button>
    </Box>
  );
};
