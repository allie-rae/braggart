import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Brag } from "../Contexts/BragContext";

interface BragFormProps {
  brags: Brag[];
  setBrags: (brags: Brag[]) => void;
}
interface StepNameMap {
  [key: number]: string;
}

const stepNameMap: StepNameMap = { 1: "Headline", 2: "Brag", 3: "Categorize" };

export const BragForm = ({ brags, setBrags }: BragFormProps) => {
  const [headline, setHeadline] = useState("");
  const [accomplishment, setAccomplishment] = useState("");
  const [accomplishmentCategoriesString, setAccomplishmentCategoriesString] = useState("");
  const [accomplishmentCategoriesList, setAccomplishmentCategoriesList] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 1, textAlign: "center" }}>
        Step {step}: {stepNameMap[step]}
      </Typography>
      {step === 1 && (
        <TextField
          label="Type accomplishment here..."
          variant="outlined"
          placeholder="Type accomplishment here..."
          value={headline}
          sx={{ minWidth: "275px", maxWidth: "275px", mb: 1 }}
          onChange={(e) => setHeadline(e.target.value)}
          inputProps={{
            "data-testid": "headline",
          }}
        />
      )}
      {step === 2 && (
        <TextField
          label="Time to brag..."
          variant="outlined"
          placeholder="Time to brag..."
          value={accomplishment}
          multiline
          sx={{ minWidth: "275px", maxWidth: "275px", mb: 1 }}
          onChange={(e) => setAccomplishment(e.target.value)}
          inputProps={{
            "data-testid": "brag",
          }}
        />
      )}
      {step === 3 && (
        <>
          <TextField
            label="Categorize..."
            variant="outlined"
            placeholder="Meetings, upskilling, productivity"
            value={accomplishmentCategoriesString}
            sx={{ minWidth: "275px", maxWidth: "275px", mb: 1 }}
            onChange={(e) => {
              const categories = e.target.value.trim().split(/[ ,]+/).filter(Boolean);
              setAccomplishmentCategoriesString(e.target.value);
              setAccomplishmentCategoriesList(categories);
            }}
            inputProps={{
              "data-testid": "categories",
            }}
          />
          <Box sx={{ mr: 1, mb: 1 }}>
            {accomplishmentCategoriesList.map((cat, catIdx) => (
              <Chip label={cat} key={`${catIdx}-${cat}`} />
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
            if (headline.trim().length) {
              setStep(2);
            }
          }
          if (step === 2) {
            if (accomplishment.trim().length) {
              setStep(3);
            }
          }
          if (step === 3) {
            setBrags([
              {
                headline: headline,
                body: accomplishment,
                categories: accomplishmentCategoriesList,
                timestamp: Date.now(),
                id: Math.random() * 100000,
              },
              ...brags,
            ]);
            setHeadline("");
            setAccomplishment("");
            setAccomplishmentCategoriesString("");
            setAccomplishmentCategoriesList([]);
            setStep(1);
          }
        }}
      >
        {stepNameMap[step]}
      </Button>
    </Box>
  );
};
