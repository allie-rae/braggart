import { render } from "@testing-library/react";
import { BragTimeline } from "./BragTimeline";
import { dummyTimelineData } from "../Contexts/BragContext";

test("empty timeline shows 'No brags found!'", () => {
  const { getByText } = render(<BragTimeline brags={[]} setBrags={() => []} />);
  expect(getByText("No brags found!")).toBeInTheDocument();
});

test("full timeline shows headlines", () => {
  const { getByText } = render(<BragTimeline brags={dummyTimelineData} setBrags={() => []} />);
  expect(getByText("Completed dependency extraction")).toBeInTheDocument();
  expect(getByText("Met with design to clarify objectives")).toBeInTheDocument();
  expect(getByText("Read Clean Code by Robert C Martin")).toBeInTheDocument();
});

test("full timeline shows body text", () => {
  const { getByText } = render(<BragTimeline brags={dummyTimelineData} setBrags={() => []} />);
  expect(
    getByText(
      "We exchanged ideas, including potential improvements, what's next priority-wise, who the work could be given to, and next steps."
    )
  ).toBeInTheDocument();
  expect(
    getByText(
      "The team decided to use its own implementation instead of depending on an external library. Today, I completed the extraction of the old library."
    )
  ).toBeInTheDocument();
  expect(
    getByText(
      "Some lessons learned: 1. It is unprofessional to write messy code 2. Always leave code cleaner than you found it 3. Write variable names that reveal intention (like 'accounts' instead of 'list') 4. Clarity is king."
    )
  ).toBeInTheDocument();
});

test("full timeline shows categories", () => {
  const { getByText, queryAllByText } = render(
    <BragTimeline brags={dummyTimelineData} setBrags={() => []} />
  );
  expect(queryAllByText("Code").length).toBe(2);
  expect(queryAllByText("Teamwork").length).toBe(2);
  expect(getByText("Upskilling")).toBeInTheDocument();
  expect(getByText("Meetings")).toBeInTheDocument();
  expect(getByText("Productivity")).toBeInTheDocument();
});

test("full timeline shows dates", () => {
  const { getByText } = render(<BragTimeline brags={dummyTimelineData} setBrags={() => []} />);
  expect(getByText("Tue Jan 17 @ 9:37 AM")).toBeInTheDocument();
  expect(getByText("Wed Jan 18 @ 10:32 AM")).toBeInTheDocument();
  expect(getByText("Thu Jan 19 @ 8:49 PM")).toBeInTheDocument();
});
