import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek.js";

dayjs.extend(isoWeek);

console.log(dayjs().isoWeek());
console.log(dayjs().isoWeekYear());
console.log(dayjs().isoWeekday());
