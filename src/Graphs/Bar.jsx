import { Fade } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import { Chart } from "react-charts";

import { transitionTime } from "../constants";

const data = [
  {
    label: "Meetings Attended",
    data: [
      {
        type: "Design",
        number: 15,
      },
      {
        type: "Mentorship",
        number: 20,
      },
      {
        type: "Product",
        number: 9,
      },
      {
        type: "Engineering",
        number: 35,
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
    <Fade
      in={primaryAxis && !!secondaryAxes}
      timeout={{ enter: transitionTime }}
    >
      <Box sx={{ height: "300px", width: "300px", marginBottom: 2 }}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </Box>
    </Fade>
  );
};
