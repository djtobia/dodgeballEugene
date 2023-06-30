import { getDataFromGoogleSheet } from "@/utility/googleSheetAPI";
import type { Schedule } from "@/interfaces/scheduleInterface";
const checkIfPassed = (date: Date) => {
  const today = new Date();
  return today > date;
};

const checkIfToday = (date: Date) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const compareDay = date.getDate();
  const compareMonth = date.getMonth();
  const compareYear = date.getFullYear();

  return day === compareDay && month === compareMonth && year === compareYear;
};
// self updating schedule for now. Will figure out how to update this via google sheet or something later
export async function getData() {
  const rows: string[][] = await getDataFromGoogleSheet();
  const dates: Schedule[] = rows
    .map((row) => {
      return {
        day: row[0],
        date: new Date(`${row[1]} ${row[2]}`),
        cancelled: row[3] === "1",
      };
    })
    .filter((date) => !checkIfPassed(date.date))
    .map((date) => {
      return {
        day: date.day,
        date: date.date,
        today: checkIfToday(date.date),
        cancelled: date.cancelled,
      };
    });
  return dates;
}


