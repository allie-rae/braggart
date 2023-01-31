import { Box } from "@mui/system";
import { useState } from "react";

import { BragForm } from "../BragForm";
import { BragList } from "../BragList";

export const BragTimeline = () => {
  const [listOfAccomplishments, setListOfAccomplishments] = useState([
    {
      headline: "Completed dependecy extraction",
      body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
      categories: ["Productivity"],
      timestamp: 1674190188554,
      id: 3,
    },
    {
      headline: "Met with design to clarify objectives",
      body: "We exchanged ideas, including potential improvements to the portal, what's next priority-wise, who the work could be given to, and next steps.",
      categories: ["Meetings", "Teamwork"],
      timestamp: 1674066764000,
      id: 2,
    },
    {
      headline: "Read Clean Code by Robert C Martin",
      body: "Some lessons learned: 1. It is unprofessional to write messy code 2. Always leave code cleaner than you found it 3. Write variable names that reveal intention (like 'accounts' instead of 'list') 4. Clarity is king.",
      categories: ["Upskilling"],
      timestamp: 1673977064000,
      id: 1,
    },
  ]);
  return (
    <Box sx={{ marginBottom: 3, maxWidth: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <BragForm
          listOfAccomplishments={listOfAccomplishments}
          setListOfAccomplishments={setListOfAccomplishments}
        />
        <BragList
          listOfAccomplishments={listOfAccomplishments}
          setListOfAccomplishments={setListOfAccomplishments}
        />
      </Box>
    </Box>
  );
};
