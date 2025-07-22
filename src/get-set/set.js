import dayjs from "dayjs";

const date= dayjs().set('hour', 5).set('minute', 55).set('second', 15);

console.log(date.format());