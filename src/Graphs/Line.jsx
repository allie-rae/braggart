import { Box, Fade } from "@mui/material";
import { useMemo } from "react";
import { Chart } from "react-charts";

import { transitionTime } from "../constants";
import { formatTimestampDayMonth } from "../utils";

const data = [
  {
    label: "Clean Code",
    data: [
      {
        date: formatTimestampDayMonth(1672552800000),
        pages: 0,
      },
      {
        date: formatTimestampDayMonth(1672639200000),
        pages: 40,
      },
      {
        date: formatTimestampDayMonth(1672725600000),
        pages: 120,
      },
      {
        date: formatTimestampDayMonth(1672812000000),
        pages: 200,
      },
      {
        date: formatTimestampDayMonth(1672898400000),
        pages: 220,
      },
      {
        date: formatTimestampDayMonth(1672984800000),
        pages: 310,
      },
      {
        date: formatTimestampDayMonth(1673071200000),
        pages: 350,
      },
      {
        date: formatTimestampDayMonth(1673157600000),
        pages: 400,
      },
    ],
  },
];

export const Line = () => {
  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.pages,
        elementType: "line",
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
