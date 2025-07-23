import dayjs from "dayjs";

console.log(dayjs().isBefore(dayjs("2011-01-01")));

console.log(dayjs().isBefore("2011-01-01", "month"));
