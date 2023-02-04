import { Box } from "@mui/system";
import { useState } from "react";

import { BragForm } from "../BragForm";
import { BragTimeline } from "../BragTimeline";

export const dummyTimelineData = [
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity"],
    timestamp: 1675580188554,
    id: 14,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Meetings", "Upskilling"],
    timestamp: 1675290188554,
    id: 13,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Upskilling"],
    timestamp: 1674880188554,
    id: 12,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Meetings", "Upskilling"],
    timestamp: 1674470188554,
    id: 11,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Meetings"],
    timestamp: 1674400188554,
    id: 10,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Teamwork", "Upskilling"],
    timestamp: 1674380188554,
    id: 9,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Teamwork"],
    timestamp: 1674340188554,
    id: 8,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Meetings"],
    timestamp: 1674300188554,
    id: 7,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Meetings"],
    timestamp: 1674260188554,
    id: 6,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Upskilling"],
    timestamp: 1674240188554,
    id: 5,
  },
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Meetings"],
    timestamp: 1674220188554,
    id: 4,
  },
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
];

export const BragPage = () => {
  const [listOfAccomplishments, setListOfAccomplishments] = useState(dummyTimelineData);
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
        <BragTimeline
          listOfAccomplishments={listOfAccomplishments}
          setListOfAccomplishments={setListOfAccomplishments}
        />
      </Box>
    </Box>
  );
};
