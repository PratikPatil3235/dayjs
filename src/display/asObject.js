import dayjs from "dayjs";
import toObject from 'dayjs/plugin/toObject.js';

dayjs.extend(toObject);

console.log(dayjs().toObject());
