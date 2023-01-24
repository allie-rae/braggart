import { Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import { Chart } from "react-charts";

const data = [
  {
    label: "Meetings Attended",
    data: [
      {
        type: "Design",
        number: 20,
      },
      {
        type: "Mentorship",
        number: 34,
      },
      {
        type: "Product Management",
        number: 10,
      },
      {
        type: "Engineering",
        number: 45,
      },
    ],
  },
];

export const Bar = () => {
  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.type,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.number,
        elementType: "bar",
      },
    ],
    []
  );
  return (
    <Box sx={{ height: "300px", width: "300px", marginBottom: 2 }}>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </Box>
  );
};
