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
      for (let i in brags) {
        const input = searchText.toLowerCase();
        if (
          brags[i].body.toLowerCase().includes(input) ||
          brags[i].headline.toLowerCase().includes(input)
        ) {
          filteredBrags.push(brags[i]);
          continue;
        }
        for (let j in brags[i].categories) {
          if (brags[i].categories[j].toLowerCase().includes(input)) {
            filteredBrags.push(brags[i]);
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
