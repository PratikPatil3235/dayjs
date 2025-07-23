import dayjs from "dayjs";
import badMutable from "dayjs/plugin/badMutable.js";

dayjs.extend(badMutable);

const today = dayjs();
today.add(1, "day");
console.log(today.format());
