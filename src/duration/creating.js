import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

console.log(dayjs.duration(100));

console.log(dayjs.duration(2, "days"));

console.log(
  dayjs.duration({
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
    weeks: 2,
    months: 2,
    years: 2,
  }).format()
);

console.log(dayjs.duration('P1Y2M3DT4H5M6S').format(),"space",
dayjs.duration('P1M').format())