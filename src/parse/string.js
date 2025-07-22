// import dayjs from "dayjs";

// console.log(
//   dayjs("2018-04-04T16:00:00.000Z").format("DD-MMM-YYYY") +
//     "\n" +
//     dayjs("2018-04-13 19:18:17.040+02:00").format("DD-MMM-YYYY") +
//     "\n" +
//     dayjs("2018-04-13 19:18").format("DD-MMM-YYYY")
// );

import dayjs from "dayjs";

const dates = [
  "2018-04-04T16:00:00.000Z",
  "2018-04-13 19:18:17.040+02:00",
  "2018-04-13 19:18",
];

console.log(dates.map((d) => dayjs(d).format("DD-MMM-YYYY")).join("\n"));
