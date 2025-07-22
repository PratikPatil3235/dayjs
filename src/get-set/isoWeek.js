import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek.js";

dayjs.extend(isoWeek);

console.log(dayjs().isoWeek());
const week = dayjs().isoWeek(2);

console.log(week.format());
