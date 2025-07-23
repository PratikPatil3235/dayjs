import dayjs from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport.js";
import utc from "dayjs/plugin/utc.js";


dayjs.extend(arraySupport);
dayjs.extend(utc);

console.log(dayjs([2010, 1, 14, 15, 25, 50, 125]));
console.log(dayjs.utc([2010, 1, 14, 15, 25, 50, 125]));
