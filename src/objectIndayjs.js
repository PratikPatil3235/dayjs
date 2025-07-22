import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport.js"; // ✅ ADD .js extension

dayjs.extend(objectSupport);

const date1 = dayjs({ hour: 15, minute: 10 });
console.log(date1.format());

const date2 = dayjs({ hour: 15, minute: 10 });
console.log(date2.format());
