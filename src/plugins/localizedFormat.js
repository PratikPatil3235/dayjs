import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";

dayjs.extend(localizedFormat);

console.log(dayjs().format("L LT"));