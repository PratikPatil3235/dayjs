import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"; 
import quarterOfYear from 'dayjs/plugin/quarterOfYear.js'

dayjs.extend(relativeTime);
dayjs.extend(quarterOfYear)

const c = dayjs();
const now = dayjs("2025-07-08");

console.log(-now.diff(c, "month"));

console.log(now.quarter())
