import dayjs from "dayjs";
import arraySupport from 'dayjs/plugin/arraySupport.js';
import utc from "dayjs/plugin/utc.js"; 

dayjs.extend(arraySupport);
dayjs.extend(utc);

// Using array format to create a Day.js date
console.log(dayjs([2010, 1, 14, 15, 25, 50, 125]).format("DD-MMM-YYYY"));

// UTC variant
console.log(dayjs.utc([2010, 1, 14, 15, 25, 50, 125]).format("DD-MMM-YYYY"));

// Only year → January 1st
console.log(dayjs([2010]).format("DD-MMM-YYYY"));

// Year + month → July 1st (because months are 0-indexed)
console.log(dayjs([2010, 6]).format("DD-MMM-YYYY"));

// Year + month + date → July 10th
console.log(dayjs([2010, 6, 10]).format("DD-MMM-YYYY"));
