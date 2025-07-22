import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

// Original time zone: 'Asia/Kolkata' (IST)
const localTime = dayjs.tz("2025-07-22 15:30", "Asia/Kolkata");

// Convert to UTC
const utcTime = localTime.utc();

// Convert to another time zone, e.g., 'America/New_York'
const newYorkTime = utcTime.tz("America/New_York");

// Print all
console.log("Local (Asia/Kolkata):", localTime.format()); // 2025-07-22T15:30:00+05:30
console.log("UTC:", utcTime.format()); // 2025-07-22T10:00:00Z
console.log("New York (EDT):", newYorkTime.format()); // 2025-07-22T06:00:00-04:00
