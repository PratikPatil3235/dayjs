import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

console.log(dayjs("1999-01-01").toNow());

console.log(dayjs("1999-01-01").toNow(true));
