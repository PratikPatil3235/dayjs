import dayjs from "dayjs";

console.log(dayjs().isAfter(dayjs("2011-01-01")));

console.log(dayjs().isAfter('2011-01-01', 'month'));