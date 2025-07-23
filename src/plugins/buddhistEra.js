import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra.js";

dayjs.extend(buddhistEra);

console.log(dayjs().format("BBBB BB"));
