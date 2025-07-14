import { TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { BragContext } from "../Contexts";
import { Brag } from "../Contexts/BragContext";

export const Search = () => {
  const [brags, setBrags] = useContext(BragContext);
  const [bragsCopy] = useState(brags);
  const [searchText, setSearchText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (!searchText.length) {
      setBrags(bragsCopy);
    } else {
      const filteredBrags: Brag[] = [];
      for (let i in bragsCopy) {
        const input = searchText.toLowerCase();
        if (
          bragsCopy[i].body.toLowerCase().includes(input) ||
          bragsCopy[i].headline.toLowerCase().includes(input)
        ) {
          filteredBrags.push(bragsCopy[i]);
          continue;
        }
        for (let j in bragsCopy[i].categories) {
          if (bragsCopy[i].categories[j].toLowerCase().includes(input)) {
            filteredBrags.push(bragsCopy[i]);
            continue;
          }
        }
      }
      setBrags(filteredBrags);
    }
  }, [searchText]);

  return (
    <TextField
      variant="filled"
      label="Search"
      size="small"
      style={{ backgroundColor: "white", borderRadius: "2px", marginRight: "10px" }}
      onChange={onChange}
      value={searchText}
    />
  );
};
