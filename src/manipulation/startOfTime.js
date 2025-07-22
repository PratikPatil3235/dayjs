import dayjs from "dayjs";

console.log(dayjs().startOf("year").format("DD-MMM-YYYY"));
console.log(dayjs().startOf("quarter").format("DD-MMM-YYYY"));
console.log(dayjs().startOf("month").format("DD-MMM-YYYY"));
console.log(dayjs().startOf("week").format("DD-MMM-YYYY"));
console.log(dayjs().startOf("isoWeek").format("DD-MMM-YYYY"));
console.log(dayjs().startOf("date").format("DD-MMM-YYYY"));
console.log(dayjs().startOf("day").day());
console.log(dayjs().startOf("hour").hour());
console.log(dayjs().startOf("minute").minute());
console.log(dayjs().startOf("second").second());
