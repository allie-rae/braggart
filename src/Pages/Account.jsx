import { Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { headerFontSize } from "../constants";

const dummyAccomplishments = { books: 5, meetings: 23, courses: 1 };

export const Account = () => {
  const { search } = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [books, setBooks] = useState(searchParams.has("books"));
  const [meetings, setMeetings] = useState(searchParams.has("meetings"));
  const [courses, setCourses] = useState(searchParams.has("courses"));

  const onInsertOrDeleteQueryParam = (queryParam, isBoxChecked, setter) => {
    const urlSearchParams = new URLSearchParams(search);

    if (isBoxChecked) {
      setter(true);
      const currentParams = Object.fromEntries(urlSearchParams.entries());
      setSearchParams({ ...currentParams, [queryParam]: dummyAccomplishments[queryParam] });
    }

    if (!isBoxChecked) {
      setter(false);
      urlSearchParams.delete(queryParam);
      const currentParams = Object.fromEntries(urlSearchParams.entries());
      setSearchParams(currentParams);
    }
  };

  return (
    <Box sx={{ marginBottom: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: headerFontSize }}>
          Account Settings
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Stack spacing={1} direction="row">
            <FormGroup>
              <FormControlLabel
                onChange={(e) => onInsertOrDeleteQueryParam("books", e.target.checked, setBooks)}
                key="books"
                control={<Checkbox />}
                label="Books"
                checked={books}
              />
              <FormControlLabel
                onChange={(e) =>
                  onInsertOrDeleteQueryParam("meetings", e.target.checked, setMeetings)
                }
                key="meetings"
                control={<Checkbox />}
                label="Meetings"
                checked={meetings}
              />
              <FormControlLabel
                onChange={(e) =>
                  onInsertOrDeleteQueryParam("courses", e.target.checked, setCourses)
                }
                key="courses"
                control={<Checkbox />}
                label="Courses"
                checked={courses}
              />
            </FormGroup>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {(searchParams.get("books") && Number(searchParams.get("books"))) +
            (searchParams.get("meetings") && Number(searchParams.get("meetings"))) +
            (searchParams.get("courses") && Number(searchParams.get("courses")))}
        </Box>
      </Box>
    </Box>
  );
};
