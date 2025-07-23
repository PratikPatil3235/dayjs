import dayjs from "dayjs";

const date1 = dayjs("2019-01-25");
const date2 = dayjs("2018-06-05");

console.log(date1.diff(date2));

const newDate = dayjs("2019-01-25");
console.log(newDate.diff("2018-06-05", "month"));

const myDate = dayjs("2019-01-25");
console.log(myDate.diff("2018-06-05", "month", true));

const myNewDate=dayjs("2025-12-07");
console.log(myNewDate.diff(dayjs(),"y"));