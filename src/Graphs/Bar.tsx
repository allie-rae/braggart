import { Typography, useTheme } from "@mui/material";
import { useContext, useMemo } from "react";
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
import { BragContext } from "../Contexts";
import { GraphWrapper } from "./index";

export const Bar = ({ title }: { title: string }) => {
  const [brags] = useContext(BragContext);
  const theme = useTheme();

  const graphData = useMemo(() => {
    const categoryCounts = brags.reduce(
      (categoryCount: Record<string, { category: string; count: number }>, timelineDataPoint) => {
        if (timelineDataPoint.categories.length) {
          timelineDataPoint.categories.map((cat) => {
            if (categoryCount[cat]) {
              categoryCount[cat].count = ++categoryCount[cat].count;
            } else {
              categoryCount[cat] = { category: cat, count: 1 };
            }
          });
        }
        return categoryCount;
      },
      {}
    );

    return Object.values(categoryCounts);
  }, [brags]);

  if (!graphData.length) {
    return null;
  }

  return (
    <GraphWrapper fadeInCondition={true}>
      <Typography variant="h6" sx={graphTitleStyles}>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={100} height={100} data={graphData} margin={graphMargins}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <RechartsBar dataKey="count" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
};
