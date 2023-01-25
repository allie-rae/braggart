import { format } from "date-fns";

export const formatTimestampDayMonthHourMinute = (timestamp) => {
  return format(new Date(timestamp), "E MMM dd @ h:mm a");
};

export const formatTimestampDayMonth = (timestamp) => {
  return format(new Date(timestamp), "E d/M");
};
