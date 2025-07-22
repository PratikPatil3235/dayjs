import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear.js";

dayjs.extend(weekOfYear);

console.log(dayjs().week());
console.log(dayjs().week(6).format());
