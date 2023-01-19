import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const stepNameMap = { 1: "Title", 2: "Brag" };

export const BragForm = ({
  listOfAccomplishments,
  setListOfAccomplishments,
}) => {
  const [newAccomplishmentTitle, setNewAccomplishmentTitle] = useState("");
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
      <Typography variant="h6" sx={{ fontSize: "1rem", marginBottom: 1 }}>
        Step {step}: {stepNameMap[step]}
      </Typography>
      <TextField
        label="Type accomplishment here..."
        variant="outlined"
        placeholder={
          step === 1 ? "Type accomplishment here..." : "Time to brag..."
        }
        value={step === 1 ? newAccomplishmentTitle : newAccomplishmentBodyText}
        multiline={(step === 1 && false) || (step === 2 && true)}
        sx={{ minWidth: "275px", mb: 1 }}
        onChange={(e) => {
          if (step === 1) setNewAccomplishmentTitle(e.target.value);
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
            if (newAccomplishmentTitle.trim().length) {
              setStep(2);
            }
          }
          if (step === 2) {
            // const timestamp = new Date();
            // console.log("timestamp", timestamp);
            setListOfAccomplishments([
              {
                title: newAccomplishmentTitle,
                body: newAccomplishmentBodyText,
                timestamp: Date.now(),
              },
              ...listOfAccomplishments,
            ]);
            setNewAccomplishmentTitle("");
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
