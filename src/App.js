import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useState } from "react";

import { Navigation } from "./Navigation";

function App() {
  const theme = useTheme();
  const [listOfAccomplishments, setListOfAccomplishments] = useState([]);
  const [newAccomplishment, setNewAccomplishment] = useState("");
  console.log("newAccomplishment", newAccomplishment);
  console.log("listOfAccomplishments", listOfAccomplishments);

  return (
    <div>
      <Navigation />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Type accomplishment here..."
          value={newAccomplishment}
          sx={{ minWidth: "275px" }}
          onChange={(e) => {
            setNewAccomplishment(e.target.value);
          }}
        />
        <Button
          color="secondary"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => {
            if (newAccomplishment.trim().length) {
              setListOfAccomplishments([
                ...listOfAccomplishments,
                newAccomplishment,
              ]);
              setNewAccomplishment("");
            }
          }}
        >
          Brag
        </Button>
        <ul>
          {listOfAccomplishments.map((text, i) => (
            <li key={`${i}-${text}`}>{text}</li>
          ))}{" "}
        </ul>
      </Box>
    </div>
  );
}

export default App;
