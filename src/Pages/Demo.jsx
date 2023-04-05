import { Checkbox, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const dummyAccomplishments = { books: 5, meetings: 15, courses: 2 };

export const Demo = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [books, setBooks] = useState(searchParams.has("books"));
  const [meetings, setMeetings] = useState(searchParams.has("meetings"));
  const [courses, setCourses] = useState(searchParams.has("courses"));

  const onInsertOrDeleteQueryParam = (queryParam, isDeletingQueryParam, setter) => {
    if (isDeletingQueryParam) {
      setter(true);
      const currentParams = Object.fromEntries(searchParams.entries());
      setSearchParams({
        ...currentParams,
        [queryParam]: dummyAccomplishments[queryParam].toString(),
      });
    }

    if (!isDeletingQueryParam) {
      setter(false);
      searchParams.delete(queryParam);
      const currentParams = Object.fromEntries(searchParams.entries());
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
        <Typography variant="h6">Query Parameter Demo</Typography>
        <Box sx={{ mt: 2, display: "flex" }}>
          <Stack spacing={1} direction="row">
            <FormGroup>
              <FormControlLabel
                onChange={(e) => onInsertOrDeleteQueryParam("books", e.target.checked, setBooks)}
                key="books"
                control={<Checkbox />}
                label="Books (5)"
                checked={books}
              />
              <FormControlLabel
                onChange={(e) =>
                  onInsertOrDeleteQueryParam("meetings", e.target.checked, setMeetings)
                }
                key="meetings"
                control={<Checkbox />}
                label="Meetings (15)"
                checked={meetings}
              />
              <FormControlLabel
                onChange={(e) =>
                  onInsertOrDeleteQueryParam("courses", e.target.checked, setCourses)
                }
                key="courses"
                control={<Checkbox />}
                label="Courses (2)"
                checked={courses}
              />
            </FormGroup>
          </Stack>
        </Box>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
          Total Accomplishments:{" "}
          {(searchParams.get("books") && Number(searchParams.get("books"))) +
            (searchParams.get("meetings") && Number(searchParams.get("meetings"))) +
            (searchParams.get("courses") && Number(searchParams.get("courses")))}
        </Box>
      </Box>
    </Box>
  );
};
