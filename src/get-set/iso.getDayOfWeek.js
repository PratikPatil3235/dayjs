import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek.js";

dayjs.extend(isoWeek);

console.log(dayjs().isoWeekday());
console.log(dayjs().isoWeekday(1))