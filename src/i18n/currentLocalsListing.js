import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData.js";
import "dayjs/locale/de.js";

dayjs.locale("de")

dayjs.extend(localeData);

console.log(dayjs.weekdays());
console.log(dayjs.weekdaysShort());
console.log(dayjs.weekdaysMin());
console.log(dayjs.monthsShort());
console.log(dayjs.months());
