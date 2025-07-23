import dayjs from "dayjs";

console.log(dayjs().isSame(dayjs("2011-01-01")));

console.log(dayjs().isSame("2025-01-01", "year"));
