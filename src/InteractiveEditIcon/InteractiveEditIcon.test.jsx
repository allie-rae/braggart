import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { InteractiveEditIcon } from "./InteractiveEditIcon";

test("if isEditTriggered is false, clicking edit icon runs turnOnEdit function", () => {
  const editBool = false;
  const turnOnEdit = jest.fn();
  const turnOffEdit = jest.fn();

  const { getByTestId, queryByTestId } = render(
    <InteractiveEditIcon
      turnOnEdit={turnOnEdit}
      turnOffEdit={turnOffEdit}
      isEditTriggered={editBool}
    />
  );

  expect(getByTestId("edit-pencil-icon")).toBeInTheDocument();
  expect(queryByTestId("save-edit-icon")).not.toBeInTheDocument();

  fireEvent.click(getByTestId("edit-pencil-icon"));

  expect(turnOnEdit).toHaveBeenCalled();
});

test("if isEditTriggered is true, clicking save icon runs turnOffEdit function", () => {
  const editBool = true;
  const turnOnEdit = jest.fn();
  const turnOffEdit = jest.fn();

  const { getByTestId, queryByTestId } = render(
    <InteractiveEditIcon
      turnOnEdit={turnOnEdit}
      turnOffEdit={turnOffEdit}
      isEditTriggered={editBool}
    />
  );

  expect(queryByTestId("edit-pencil-icon")).not.toBeInTheDocument();
  expect(getByTestId("save-edit-icon")).toBeInTheDocument();

  fireEvent.click(getByTestId("save-edit-icon"));

  expect(turnOffEdit).toHaveBeenCalled();
});
