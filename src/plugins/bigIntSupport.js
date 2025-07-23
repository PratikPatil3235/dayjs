import dayjs from "dayjs";
import bigIntSupport from "dayjs/plugin/bigIntSupport.js";

dayjs.extend(bigIntSupport);

console.log(dayjs(BigInt(1666310421101)).format());
console.log(dayjs.unix(BigInt(1666311003)).format());
