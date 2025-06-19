import { createContext, useEffect, useState } from "react";

export const BragContext = createContext([]);

// keeping this for dev purposes
// eslint-disable-next-line
const dummyTimelineData = [
  {
    headline: "Read Clean Code by Robert C Martin",
    body: "Some lessons learned: 1. It is unprofessional to write messy code 2. Always leave code cleaner than you found it 3. Write variable names that reveal intention (like 'accounts' instead of 'list') 4. Clarity is king.",
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
    body: "We exchanged ideas, including potential improvements, what's next priority-wise, who the work could be given to, and next steps.",
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

export const BragContextProvider = ({ children }: { children: React.ReactNode }) => {
  const bragTimelineData = localStorage.getItem("bragTimelineData") || "";
  const [brags, setBrags] = useState(JSON.parse(bragTimelineData) || []);

  useEffect(() => {
    localStorage.setItem("bragTimelineData", JSON.stringify(brags));
  }, [brags]);

  return <BragContext.Provider value={[brags, setBrags]}>{children}</BragContext.Provider>;
};
