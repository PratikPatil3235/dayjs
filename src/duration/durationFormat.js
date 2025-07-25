import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

const date = dayjs
  .duration({
    seconds: 1,
    minutes: 2,
    hours: 50,
    days: 4,
    months: 6,
    years: 7,
  })
  .format("YYYY-MM-DDTHH:mm:ss");

console.log(date);
