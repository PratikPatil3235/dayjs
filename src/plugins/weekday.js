import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday.js";

dayjs.extend(weekday);

console.log(dayjs().weekday(-7).format("ddd"));
console.log(dayjs().weekday(7).format("ddd"));

console.log(dayjs().weekday(-7).format("ddd"));
console.log(dayjs().weekday(7).format("ddd"));
