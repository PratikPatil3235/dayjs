import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday.js"

dayjs.extend(weekday);
const c=dayjs();

console.log(c.weekday(5).format("ddd DD MMM"))