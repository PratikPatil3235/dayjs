import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";

dayjs.extend(isSameOrBefore);

console.log(dayjs().isSameOrBefore(dayjs("2011-01-01")));

console.log(dayjs().isSameOrBefore("2011-01-01", "year"));
