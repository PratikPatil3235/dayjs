import dayjs from "dayjs";
import toArray from "dayjs/plugin/toArray.js";

dayjs.extend(toArray);

console.log(dayjs("2019-01-25").toArray());
