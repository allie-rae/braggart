import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { InteractiveDeleteIcon } from "./InteractiveDeleteIcon";

const dummyListOfBrags = [
  {
    headline: "Completed dependecy extraction",
    body: `The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library.`,
    timestamp: 1674190188554,
    id: 3,
  },
  {
    headline: "Met with design to clarify objectives",
    body: "We exchanged ideas, including potential improvements to the portal, what's next priority-wise, who the work could be given to, and next steps.",
    timestamp: 1674066764000,
    id: 2,
  },
  {
    headline: "Read Clean Code by Robert C Martin",
    body: "Some lessons learned: 1. It is unprofessional to write messy code 2. Always leave code cleaner than you found it 3. Write variable names that reveal intention (like 'accounts' instead of 'list') 4. Clarity is king.",
    timestamp: 1673977064000,
    id: 1,
  },
];

// isUserConfirmingDelete,
// onConfirm,
// onDelete,

// test that the ? appears
// test that the button deletes the info as expected

test("Question mark appears after user clicks trash icon 1 time", () => {
  const { queryByText, getByTestId } = render(
    <InteractiveDeleteIcon onDelete={() => null} />
  );
  expect(queryByText("?")).not.toBeInTheDocument();
  fireEvent.click(getByTestId("interactive-delete-icon"));
  expect(queryByText("?")).toBeInTheDocument();
});
