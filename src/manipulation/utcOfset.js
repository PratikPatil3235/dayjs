import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

console.log(dayjs().utcOffset(120).format());
console.log(dayjs().format());
console.log(dayjs.utc("2000-01-01T06:01:02Z").utcOffset(1, true).format());
