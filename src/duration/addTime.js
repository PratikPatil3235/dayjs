import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);

var a = dayjs.duration(1, "d");
var b = dayjs.duration(2, "d");

console.log(a.add(b).days()); // 3
console.log(a.add({ days: 2 }).days());
console.log(a.add(3, "days").days());
