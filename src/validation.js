import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.extend(customParseFormat);


console.log(dayjs("2022-01-33", "YYYY-MM-DD", true).isValid()); // false


console.log(dayjs("2022-01-30").isValid()); // true


console.log(dayjs("2022-02-31", "YYYY-MM-DD", true).isValid()); // false
