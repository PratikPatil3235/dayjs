import dayjs from "dayjs";
import pluralGetSet from "dayjs/plugin/pluralGetSet.js";

dayjs.extend(pluralGetSet);

console.log(dayjs().millisecond());
console.log(dayjs().milliseconds())
console.log(dayjs().second());