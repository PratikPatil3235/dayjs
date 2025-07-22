import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import "dayjs/locale/es.js";

dayjs.extend(customParseFormat);
dayjs.locale("es");

// 🔥 Notice: lowercase "enero" here
const input = "2018 enero 15";
const format = "YYYY MMMM DD";

const parsed = dayjs(input, format);

console.log("Current locale:", dayjs.locale()); // → es
console.log("Is valid:", parsed.isValid()); // → true
console.log("Formatted:", parsed.format("YYYY-MM-DD")); // → 2018-01-15

console.log(dayjs("1970-00-00", "YYYY-MM-DD").isValid());
console.log(dayjs("1970-00-00", "YYYY-MM-DD", true).isValid());
console.log(dayjs("1970-00-00", "YYYY-MM-DD", "es", true).isValid());

const date = dayjs(
  "12-25-2001",
  ["YYYY", "YYYY-MM-DD", "MM-DD-YYYY"],
  "es",
  true
);

console.log("Is valid:", date.isValid());
console.log("Parsed:", date.format("YYYY-MM-DD"));

dayjs.locale("en");
console.log("Current locale:", dayjs.locale());
