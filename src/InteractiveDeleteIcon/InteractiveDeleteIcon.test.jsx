import { act, fireEvent, render } from "@testing-library/react";
import React from "react";

import { InteractiveDeleteIcon } from "./InteractiveDeleteIcon";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("Question mark appears after user clicks trash icon 1 time then disappears after 3 seconds", () => {
  const deleteFunc = jest.fn();
  const { queryByText, getByTestId } = render(
    <InteractiveDeleteIcon onDelete={deleteFunc} />
  );

  expect(queryByText("?")).not.toBeInTheDocument();

  fireEvent.click(getByTestId("interactive-delete-icon"));

  expect(queryByText("?")).toBeInTheDocument();

  expect(setTimeout).toHaveBeenCalled();
  act(() => jest.runOnlyPendingTimers());

  expect(queryByText("?")).not.toBeInTheDocument();
});

test("onDelete function runs after trash icon is clicked twice", () => {
  const deleteFunc = jest.fn();
  const { getByTestId } = render(
    <InteractiveDeleteIcon onDelete={deleteFunc} />
  );

  fireEvent.click(getByTestId("interactive-delete-icon"));
  fireEvent.click(getByTestId("interactive-delete-icon"));

  expect(deleteFunc).toHaveBeenCalled();
});
