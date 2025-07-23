import dayjs from "dayjs";
import isTomorrow from 'dayjs/plugin/isTomorrow.js';

dayjs.extend(isTomorrow);

console.log(dayjs().add(1,"day").isTomorrow());