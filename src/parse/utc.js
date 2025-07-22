import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

console.log(dayjs().format());

console.log(dayjs.utc().format());

console.log(dayjs.utc().second(30).format("DD-MMM-YYYY"));

const interval = setInterval(() => {
  console.log(dayjs.utc().second());
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Interval cleared!");
}, 5000);
