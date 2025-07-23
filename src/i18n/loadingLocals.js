import dayjs from 'dayjs';
import 'dayjs/locale/de.js';

dayjs.locale('de'); // sets German as the global locale
console.log(dayjs().format('dddd, D MMMM YYYY')); // e.g., Dienstag, 23 Juli 2025

console.log(dayjs().locale('de').format('dddd, D MMMM YYYY'));
