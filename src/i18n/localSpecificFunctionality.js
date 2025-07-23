import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData.js";
import "dayjs/locale/de.js"; // or any other locale
import "dayjs/locale/fr.js";

dayjs.extend(localeData);
dayjs.locale("de"); // use German globally

const globalLocaleData = dayjs.localeData();

console.log(globalLocaleData.firstDayOfWeek()); // e.g., 1 for Monday in German
console.log(globalLocaleData.months()); // Full month names
console.log(globalLocaleData.weekdaysShort()); // Short day names

console.log(globalLocaleData.months(dayjs())); // Works same as above

const germanInstance = dayjs().locale("de");
const instanceLocaleData = germanInstance.localeData();

console.log(instanceLocaleData.months()); // ['Januar', 'Februar', ...]
console.log(instanceLocaleData.weekdaysMin()); // ['So', 'Mo', ...]

const fr = dayjs().locale("fr").localeData();

console.log("🇫🇷 French Months:", fr.months());
