import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday.js";

dayjs.extend(isToday);

const ans = dayjs().isToday();

console.log(ans);
