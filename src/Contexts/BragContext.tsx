import { createContext, useEffect, useState } from "react";

export interface Brag {
  headline: string;
  body: string;
  categories: string[];
  timestamp: number;
  id: number;
}

type BragContextType = [Brag[], (brags: Brag[]) => void];

export const BragContext = createContext<BragContextType>([[], () => {}]);

// this will allow potential employers who do not want to interact with the app see the timeline
const dummyTimelineData = [
  {
    headline: "Completed dependency extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    categories: ["Productivity", "Teamwork", "Code"],
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
    categories: ["Upskilling", "Code"],
    timestamp: 1673977064000,
    id: 1,
  },
];

export const BragContextProvider = ({ children }: { children: React.ReactNode }) => {
  const bragTimelineData = localStorage.getItem("bragTimelineData") || "";
  const [brags, setBrags] = useState<Brag[]>(JSON.parse(bragTimelineData) || []);

  useEffect(() => {
    const timelineBrags = brags.length ? brags : dummyTimelineData;
    localStorage.setItem("bragTimelineData", JSON.stringify(timelineBrags));
  }, [brags]);

  return <BragContext.Provider value={[brags, setBrags]}>{children}</BragContext.Provider>;
};
