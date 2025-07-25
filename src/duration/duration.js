import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

const dur = dayjs.duration({ months: 12 });
console.log(dayjs.duration(26, "hours")); // 1 day 2 hours ...
console.log(dur.months()); // 12
