import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BragForm } from "./BragForm";

test("filling out input makes next input appear", async () => {
  const { getByText, getByRole, getByTestId } = render(<BragForm />);

  const input1 = getByTestId("headline");
  const button = getByRole("button");
  await userEvent.type(input1, "Bragginggg");
  expect(input1).toHaveValue("Bragginggg");
  await userEvent.click(button);

  expect(getByText("Step 2: Brag")).toBeInTheDocument();
  const input2 = getByTestId("brag");
  await userEvent.type(input2, "I am bragging");
  expect(input2).toHaveValue("I am bragging");
  await userEvent.click(button);

  expect(getByText("Step 3: Categorize")).toBeInTheDocument();
  const input3 = getByTestId("categories");
  await userEvent.type(input3, "upskilling job fun");
  expect(input3).toHaveValue("upskilling job fun");
});
