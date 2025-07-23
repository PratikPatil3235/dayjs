import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale.js";

dayjs.extend(updateLocale);

const months = [
  "Jan-Custom",
  "Feb-Custom",
  "Mar-Custom",
  "Apr-Custom",
  "May-Custom",
  "Jun-Custom",
  "Jul-Custom",
  "Aug-Custom",
  "Sep-Custom",
  "Oct-Custom",
  "Nov-Custom",
  "Dec-Custom",
];

dayjs.updateLocale("en", {
  months,
});

console.log(dayjs().format("MMMM")); // ➜ Should print your custom month name
