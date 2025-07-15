import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const Dictionary = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const onSearch = () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((dictionaryList) => {
        setDefinition(dictionaryList[0].meanings[0].definitions[0].definition);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Dictionary</h1>
      <Box>
        <TextField size="small" value={word} onChange={(e) => setWord(e.target.value)} />
        <Button onClick={onSearch}>Search</Button>
      </Box>
      {!!definition.length && <Box sx={{ margin: "20px" }}>{definition}</Box>}
    </Box>
  );
};
