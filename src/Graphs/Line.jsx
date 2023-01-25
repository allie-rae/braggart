import { Typography, useTheme } from "@mui/material";
import {
  CartesianGrid,
  Line as RechartsLine,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { headerFontSize } from "../constants";
import { formatTimestampDayMonth } from "../utils/formatTimestamp";
import { GraphWrapper } from "./index";

const data = [
  {
    date: formatTimestampDayMonth(1672552800000),
    Pages: 0,
  },
  {
    date: formatTimestampDayMonth(1672639200000),
    Pages: 40,
  },
  {
    date: formatTimestampDayMonth(1672725600000),
    Pages: 120,
  },
  {
    date: formatTimestampDayMonth(1672812000000),
    Pages: 200,
  },
  {
    date: formatTimestampDayMonth(1672898400000),
    Pages: 220,
  },
  {
    date: formatTimestampDayMonth(1672984800000),
    Pages: 310,
  },
  {
    date: formatTimestampDayMonth(1673071200000),
    Pages: 350,
  },
  {
    date: formatTimestampDayMonth(1673157600000),
    Pages: 400,
  },
];

export const Line = ({ title }) => {
  const theme = useTheme();
  return (
    <GraphWrapper fadeInCondition={true}>
      <Typography
        variant="h6"
        sx={{ fontSize: headerFontSize, textAlign: "center", mb: 1 }}
      >
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 10,
            right: 40,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <RechartsLine
            type="monotone"
            dataKey="Pages"
            strokeOpacity={1}
            stroke={theme.palette.primary.main}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
};
