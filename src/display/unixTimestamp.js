import dayjs from "dayjs";

console.log(dayjs("2019-01-25").unix());

//This returns the Unix timestamp (the number of seconds since the Unix Epoch) of the Day.js object.
//This value is floored to the nearest second, and does not include a milliseconds component.
