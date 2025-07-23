import dayjs from "dayjs";
import isYesterday from "dayjs/plugin/isYesterday.js";

dayjs.extend(isYesterday);

console.log(dayjs().subtract(1,"day").isYesterday());
