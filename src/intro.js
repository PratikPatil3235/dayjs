import dayjs from "dayjs";
//get date
console.log(dayjs().year());

//set date
console.log(dayjs().year("2000").format("DD-MMM-YYYY"));

// manipulatin of date...
console.log(dayjs().add(7, "day").format("DD-MMM-YYYY"));

//display

console.log(dayjs().format("DD-MM-YYYY"));

console.log("null", dayjs(null).format("DD-MMM-YYYY")); // invalid date
console.log("undefined", dayjs(undefined).format("DD-MMM-YYYY")); //current date

console.log(dayjs().isSame("2025-07-03", "month"));
console.log(dayjs().isSame("2025-06-03", "month"));
console.log(dayjs().isSame("2025-07-22", "day"));
