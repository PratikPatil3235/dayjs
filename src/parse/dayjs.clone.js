import dayjs from "dayjs";

const val=dayjs();

const val2=val.clone()
console.log(val2.format());
console.log(val.format());

var a = dayjs()
var b = dayjs(a)

console.log(a.format());
console.log(b.format());

console.log("Current locale:", dayjs.locale()); // en