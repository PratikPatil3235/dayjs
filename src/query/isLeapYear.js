import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear.js";

dayjs.extend(isLeapYear);

if (dayjs("2000-01-01").isLeapYear()) {
  console.log("This is leap Year");
} else {
  console.log("This is not leap year...");
}
