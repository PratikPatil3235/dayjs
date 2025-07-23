import dayjs from "dayjs";

console.log(dayjs().format());
// current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'

console.log(dayjs("2019-01-25").format("[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"));
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'

console.log(dayjs("2019-01-25").format("DD/MM/YYYY")); // '25/01/2019'

console.log(dayjs().format("d"));

console.log(dayjs().format("YYYY"))

console.log(dayjs().format("MMMM"));

console.log(dayjs().format("A"));