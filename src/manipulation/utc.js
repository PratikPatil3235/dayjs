import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

var a = dayjs();
console.log(a.format());
console.log(a.utc().format());

console.log(dayjs("2016-05-03 22:15:01").utc(true).format());
