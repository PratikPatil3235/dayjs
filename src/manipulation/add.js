import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js"
const a = dayjs();
const b = a.add(7, "day");

dayjs.extend(duration)

console.log(a.format("DD-MMM-YYYY"));
console.log(b.format("DD-MMM-YYYY"));

const result = dayjs().add(dayjs.duration({'days' : 1}));

console.log(result.format("DD-MMM-YYYY"))