import { Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
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
import { dummyTimelineData } from "../Pages/BragPage";
import { GraphWrapper } from "./index";

export const Bar = ({ title }) => {
  const theme = useTheme();

  const categoryCounts = useMemo(
    () =>
      dummyTimelineData.reduce((categoryCount, timelineDataPoint) => {
        if (timelineDataPoint.categories.length) {
          timelineDataPoint.categories.map((cat) => {
            if (categoryCount[cat]) {
              categoryCount[cat] = { ...categoryCount[cat], Count: categoryCount[cat].Count + 1 };
            } else {
              categoryCount[cat] = { category: cat, Count: 1 };
            }
          });
        }
        return categoryCount;
      }, {}),
    [dummyTimelineData]
  );

  const graphData = Object.values(categoryCounts);

  console.log("graphData", graphData);

  return (
    <GraphWrapper fadeInCondition={true}>
      <Typography variant="h6" sx={graphTitleStyles}>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width="100%" height="100%" data={graphData} margin={graphMargins}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <RechartsBar dataKey="Count" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
};
