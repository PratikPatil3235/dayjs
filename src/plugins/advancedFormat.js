import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

dayjs.extend(advancedFormat);

console.log(dayjs().format("Q Do k kk X x"));
