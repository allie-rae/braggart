import { Typography, useTheme } from "@mui/material";
import {
  Bar as RechartsBar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { graphMargins, graphTitleStyles } from "../constants";
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
  const theme = useTheme();
  return (
    <GraphWrapper fadeInCondition={true}>
      <Typography variant="h6" sx={graphTitleStyles}>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width="100%" height="100%" data={data} margin={graphMargins}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <RechartsBar dataKey="Meetings" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
};
