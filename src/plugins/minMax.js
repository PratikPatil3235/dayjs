import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax.js";

dayjs.extend(minMax);

console.log(dayjs.max(dayjs(), dayjs("2018-01-01"), dayjs("2019-01-01")).format());
console.log(dayjs.min([dayjs(), dayjs("2018-01-01"), dayjs("2019-01-01")]).format());
