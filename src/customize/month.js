import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale.js";

dayjs.extend(updateLocale);

const monthShortStandalone = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthFullGrammatical = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

dayjs.updateLocale("en", {
  months: function (dayjsInstance, format) {
    if (/^MMMM/.test(format)) {
      return monthFullGrammatical[dayjsInstance.month()];
    } else {
      return monthShortStandalone[dayjsInstance.month()];
    }
  },
  // ✅ this is required when using function for `months`
  monthsShort: monthShortStandalone,
});

console.log(dayjs().format("MMMM")); // July
console.log(dayjs().format("MMM")); // Jul
