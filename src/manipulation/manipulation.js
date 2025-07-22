import dayjs from "dayjs";

console.log(
  dayjs("2019-01-25").add(1, "day").subtract(1, "year").year(2009).toString()
);

console.log(
  dayjs("2019-01-25")
    .add(1, "day")
    .subtract(1, "year")
    .year(2009)
    .format("YYYY-MM-DD")
);
    