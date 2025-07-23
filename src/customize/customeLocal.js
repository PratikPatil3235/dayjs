import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js"; // ✅ import relativeTime

dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime); // ✅ extend relativeTime

// Define full custom locale
const customLocale = {
  name: "custom-en",

  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  weekStart: 1,
  yearStart: 4,

  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),

  ordinal: (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  },

  formats: {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
    l: "D/M/YYYY",
    ll: "D MMM, YYYY",
    lll: "D MMM, YYYY h:mm A",
    llll: "ddd, MMM D, YYYY h:mm A",
  },

  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },

  meridiem: (hour, minute, isLowercase) =>
    hour >= 12 ? (isLowercase ? "pm" : "PM") : isLowercase ? "am" : "AM",
};

// Register the locale
dayjs.locale(customLocale);

const now = dayjs().locale("custom-en");

console.log(now.format("dddd, MMMM D, YYYY h:mm A"));
console.log(now.format("LLL"));
console.log(now.from(dayjs().subtract(3, "days"))); // ✅ Now this works: 3 days ago
