import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween.js";

dayjs.extend(isBetween);

console.log(dayjs("2010-10-20").isBetween("2010-10-19", dayjs("2010-10-25")));

console.log(dayjs().isBetween("2010-10-19", "2010-10-25", "month"));

console.log(
  dayjs("2016-10-30").isBetween("2016-01-01", "2016-10-30", null, "[)")
);
