import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js";

dayjs.extend(isSameOrAfter);

console.log(dayjs().isSameOrAfter(dayjs("2011-01-01")));

console.log(dayjs().isSameOrAfter("2011-01-01", "year"));
