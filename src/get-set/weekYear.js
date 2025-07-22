import dayjs from "dayjs";
import weekYear from "dayjs/plugin/weekYear.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";

dayjs.extend(weekYear);
dayjs.extend(weekOfYear);

console.log(dayjs().weekYear());
