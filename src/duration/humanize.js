import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(duration);
dayjs.extend(relativeTime);

console.log(dayjs.duration(1, "minutes").humanize()); // a minute
console.log(dayjs.duration(1, "minutes").humanize(true)); // in a minute
console.log(dayjs.duration(-1, "minutes").humanize(true)); // a minute ago
console.log(dayjs.duration(90, "seconds").humanize()); // 2 minutes
