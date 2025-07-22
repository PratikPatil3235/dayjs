import dayjs from "dayjs";
const a = dayjs();
const b = a.add(7, "day");

console.log(a.format("DD-MMM-YYYY"));
console.log(b.format("DD-MMM-YYYY"));