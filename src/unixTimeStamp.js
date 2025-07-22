import dayjs from "dayjs";

const myDay = dayjs(1318781876406);
const newDay = dayjs.unix(1318781876);
const newDate = dayjs.unix(1318781876.721);

console.log(myDay.format("DD/MMM/YYYY"));
console.log(newDay.format("DD/MMM/YYYY"));
console.log(newDate.format("DD-MM-YYYY"),newDate.hour())