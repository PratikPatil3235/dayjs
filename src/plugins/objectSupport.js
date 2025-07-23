import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport.js";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(objectSupport);
dayjs.extend(utc);
const newDate = dayjs({ year: 2030, month: 2, day: 13 });
console.log(newDate.format());

const day = dayjs.utc({
  year: 2010,
  month: 1,
  day: 12,
});

console.log(day.format());

console.log(dayjs().set({ year: 2010, month: 1, day: 12 }).format());

console.log(dayjs().add({ M: 1 }).format());

console.log(dayjs().subtract({ month: 1 }).format());
