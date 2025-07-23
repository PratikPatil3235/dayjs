import dayjs from 'dayjs';
import 'dayjs/locale/de.js'; // Load German locale

dayjs.locale('de'); // Set German as global locale
console.log(dayjs().format('dddd, D MMMM YYYY')); // Outputs in German

dayjs.locale('en'); // Switch back to English
console.log(dayjs().format('dddd, D MMMM YYYY'));
