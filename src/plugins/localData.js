import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import localeData from "dayjs/plugin/localeData.js";
import "dayjs/locale/zh-cn.js";

dayjs.extend(localizedFormat);
dayjs.extend(localeData);

// 🌍 Global Locale (default is 'en')
const globalLocaleData = dayjs.localeData();

dayjs.locale("zh-cn");

console.log("▶️ Global Locale:");
console.log("First day of week:", globalLocaleData.firstDayOfWeek()); // 0 = Sunday
console.log("Full month names:", globalLocaleData.months());
console.log("Short month names:", globalLocaleData.monthsShort());
console.log("Full weekday names:", globalLocaleData.weekdays());
console.log("Short weekday names:", globalLocaleData.weekdaysShort());
console.log("Minimal weekday names:", globalLocaleData.weekdaysMin());
console.log("Long date format (L):", globalLocaleData.longDateFormat("L"));

// Passing dayjs instance to locale methods
console.log("Month of today:", globalLocaleData.months(dayjs())); // e.g., July
console.log("Short month of today:", globalLocaleData.monthsShort(dayjs())); // e.g., Jul
console.log("Weekday of today:", globalLocaleData.weekdays(dayjs())); // e.g., Tuesday
console.log("Short weekday of today:", globalLocaleData.weekdaysShort(dayjs())); // e.g., Tue
console.log("Min weekday of today:", globalLocaleData.weekdaysMin(dayjs())); // e.g., Tu
console.log("Meridiem (14:00):", globalLocaleData.meridiem(14, 0, false)); // e.g., PM
console.log("Ordinal (1):", globalLocaleData.ordinal(1)); // e.g., 1st


// 🧍 Instance Locale (same as global unless overridden)
const instanceLocaleData = dayjs().localeData();

console.log("\n▶️ Instance Locale:");
console.log("First day of week:", instanceLocaleData.firstDayOfWeek());
console.log("Full month names:", instanceLocaleData.months());
console.log("Short month names:", instanceLocaleData.monthsShort());
console.log("Full weekday names:", instanceLocaleData.weekdays());
console.log("Short weekday names:", instanceLocaleData.weekdaysShort());
console.log("Minimal weekday names:", instanceLocaleData.weekdaysMin());
console.log("Long date format (L):", instanceLocaleData.longDateFormat("L"));
console.log("Meridiem (14:00):", instanceLocaleData.meridiem(14, 0, false));
console.log("Ordinal (2):", instanceLocaleData.ordinal(2));
