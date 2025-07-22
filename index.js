import dayjs from "dayjs";
// import toArray form "dayjs/plugin/toArray.js"

// dayjs.extend(toArray)
import relativeTime from "dayjs/plugin/relativeTime.js";
import quarterOfYear from "dayjs/plugin/quarterOfYear.js";

dayjs.extend(relativeTime);
dayjs.extend(quarterOfYear);

const c = dayjs();
const now = dayjs("2025-07-08");

console.log(c.format());
console.log(
  "Time format: hh:mm:ss:mili :",
  c.hour(),
  c.minute(),
  c.second(),
  c.millisecond()
);
console.log("Date: ", c.date());
console.log("Month: ", c.month() + 1);
console.log("Year: ", c.year());
// console.log(c.toArray())
console.log(c.daysInMonth());
console.log(c.startOf("month").format("DD-MMM-YYYY"));

console.log(-now.diff(c, "month"));

console.log(c.quarter());
