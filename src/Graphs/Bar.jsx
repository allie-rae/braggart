import { Typography } from "@mui/material";
import {
  Bar as RechartsBar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { headerFontSize } from "../constants";
import { GraphWrapper } from "./index";

const data = [
  {
    type: "Design",
    Meetings: 15,
  },
  {
    type: "Mentorship",
    Meetings: 20,
  },
  {
    type: "Product",
    Meetings: 9,
  },
  {
    type: "Engineering",
    Meetings: 35,
  },
];

export const Bar = ({ title }) => {
  return (
    <GraphWrapper fadeInCondition={true}>
      <Typography
        variant="h6"
        sx={{ fontSize: headerFontSize, textAlign: "center", mb: 1 }}
      >
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <RechartsBar dataKey="Meetings" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
};
