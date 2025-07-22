import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

var a = dayjs.utc();
console.log(a.format());
console.log(a.local().format());
