import dayjs from "dayjs";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear.js";
import isLeapYear from "dayjs/plugin/isLeapYear.js";

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

console.log(dayjs("2004-01-01").isoWeeksInYear()); // 53
console.log(dayjs("2005-01-01").isoWeeksInYear()); // 52
