import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";

dayjs.extend(duration);
console.log("mili seconds");
console.log(dayjs.duration(500).milliseconds());
console.log(dayjs.duration(15000).milliseconds());

console.log(dayjs.duration(500).asMilliseconds()); // 500
console.log(dayjs.duration(1500).asMilliseconds()); // 1500
console.log(dayjs.duration(15000).asMilliseconds());

console.log("seconds");
console.log(dayjs.duration(1500).seconds());
console.log(dayjs.duration(1500).asSeconds());

console.log("Minutes");
console.log(dayjs.duration(123).minutes());
console.log(dayjs.duration(1234).asMinutes());

console.log("hours");
console.log(dayjs.duration(12).hours());
console.log(dayjs.duration(123).asHours());

console.log("days");
console.log(dayjs.duration(23).days());
console.log(dayjs.duration(234).asDays());

console.log("weeks");
console.log(dayjs.duration(23).weeks());
console.log(dayjs.duration(1234).asWeeks());

console.log("months");
console.log(dayjs.duration(23).months());
console.log(dayjs.duration(344).asMonths());

console.log("years");
console.log(dayjs.duration(234).years());
console.log(dayjs.duration(234).asYears());
