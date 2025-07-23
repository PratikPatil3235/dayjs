import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear.js";

dayjs.extend(dayOfYear);

console.log(dayjs("2010-01-01").dayOfYear());

console.log(dayjs("2010-01-01").dayOfYear(365).format());
