import { render } from "@testing-library/react";
import { BragTimeline } from "./BragTimeline";

test("empty timeline shows 'No brags found!'", () => {
  const { getByText } = render(<BragTimeline />);
  expect(getByText("No brags found!")).toBeInTheDocument();
});
