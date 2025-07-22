import dayjs from "dayjs";

console.log(
  dayjs().get("year"),
  dayjs().get("month")+1, // start 0
  dayjs().get("date"),
  dayjs().get("hour"),
  dayjs().get("minute"),
  dayjs().get("second"),
  dayjs().get("millisecond")
);
