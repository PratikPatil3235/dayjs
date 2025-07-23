import dayjs from "dayjs";
import weekYear from "dayjs/plugin/weekYear.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
import isoWeek from "dayjs/plugin/isoWeek.js";

dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(isoWeek);

console.log(dayjs().weekYear()); // e.g. 2025
console.log("Week Year:", dayjs().isoWeek());

console.log("Week Of Year:", dayjs().week());
