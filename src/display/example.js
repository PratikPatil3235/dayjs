import dayjs from "dayjs";

const nativeDate = new Date(2025, 6, 23, 10, 30); // July 23, 2025, 10:30 AM
const dayjsDate = dayjs(nativeDate);

console.log("Native Date:", nativeDate);
console.log("Day.js Object:", dayjsDate.toString());
console.log("Formatted:", dayjsDate.format("YYYY-MM-DD HH:mm:ss"));
console.log("Add 7 Days:", dayjsDate.add(7, "day").format());
console.log("Start of Month:", dayjsDate.startOf("month").format());
