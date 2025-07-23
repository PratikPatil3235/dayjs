import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

const dur = dayjs.duration({ months: 12 });
console.log(dur.months()); // 12
