import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar.js";
dayjs.extend(calendar);

console.log("date: ",dayjs().calendar(dayjs("2008-01-01")));

console.log(
  dayjs().calendar(null, {
    sameDay: "[Today at] h:mm A",
    nextDay: "[Tomorrow at] h:mm A",
    nextWeek: "dddd [at] h:mm A",
    lastDay: "[Yesterday at] h:mm A",
    lastWeek: "[Last] dddd [at] h:mm A",
    sameElse: "DD/MM/YYYY",
  })
);
