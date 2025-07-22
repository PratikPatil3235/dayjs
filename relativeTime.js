import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);
const c = dayjs();

console.log(dayjs("2025-04-22").fromNow());
console.log(dayjs("2024-07-07").from("2025-07-28"));
    