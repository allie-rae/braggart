import { format } from "date-fns";

export const formatTimestampDayMonthHourMinute = (timestamp: number) => {
  return format(new Date(timestamp), "E MMM dd @ h:mm a");
};

export const formatTimestampDayMonth = (timestamp: number) => {
  return format(new Date(timestamp), "E M/d");
};
