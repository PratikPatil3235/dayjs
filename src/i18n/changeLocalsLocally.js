import dayjs from "dayjs";
import "dayjs/locale/de.js"; // Load German locale
import "dayjs/locale/fr.js";

const date = dayjs().locale("de").format("dddd, D MMMM YYYY");
console.log(date); // e.g., "Mittwoch, 23 Juli 2025"

console.log(dayjs().format("dddd, D MMMM YYYY")); // will still print in English

const germanDate = dayjs().locale("de").format("dddd, D MMMM YYYY");
const frenchDate = dayjs().locale("fr").format("dddd, D MMMM YYYY");

console.log("German:", germanDate); // Mittwoch, 23 Juli 2025
console.log("French:", frenchDate); // mercredi, 23 juillet 2025
