import dayjs from "dayjs";

const d = new Date(2018, 8, 18); // Native Date: 2018-09-18
const day = dayjs(d); // Day.js clone

console.log("Before change:");
console.log(
  "Original Date:",
  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
);
console.log("Day.js Date:", day.format("YYYY-MM-DD"));

d.setFullYear(2020);

console.log("\nAfter changing native Date:");
console.log(
  "Original Date:",
  d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
);
console.log("Day.js Date:", day.format("YYYY-MM-DD"));

// This example shows that Day.js creates a copy of the native JavaScript Date object.
// Once the Day.js object is created, it becomes independent of the original Date.
// If we change the original Date using setFullYear or other setters,
// the Day.js object will remain unchanged — demonstrating Day.js's immutability.
