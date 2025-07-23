import dayjs from "dayjs";

console.log(dayjs.isDayjs(dayjs()));
console.log(dayjs.isDayjs(new Date()));
console.log(dayjs() instanceof dayjs);
