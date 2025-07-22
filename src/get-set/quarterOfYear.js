import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear.js";

dayjs.extend(quarterOfYear);

console.log(dayjs().quarter(2).format())
console.log(dayjs("2025-02-01").quarter());