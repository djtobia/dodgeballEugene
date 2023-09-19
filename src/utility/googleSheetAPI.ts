import type { Headers, Sheet, SheetValues } from "@/interfaces/leagueSheetInterfaces";
async function getOpenDataFromGoogleSheet() {
  // Authorize client using the loaded credentials
  // Get the data from the specified spreadsheet and sheet
  const apiKey = "AIzaSyDjAeFHuMgWhYkLK5mxWU60zuaeuKiQfOE";
  const spreadsheetId = "1uDOpe_oTZ5btQhZJK4dKu-xvZcY956G8aiFSSN1PCoQ";
  const range = "Sheet1!A2:D10"; // Adjust the range according to your data
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
  )
    .then((response) => response.json())
    .then((response) => {
      const values = response.values;
      if (values.length) {
        return values;
      } else {
        console.log("No data found.");
      }
    });
}
async function getLeagueScheduleFromGoogleSheet() {
  const apiKey = "AIzaSyDjAeFHuMgWhYkLK5mxWU60zuaeuKiQfOE";
  const spreadsheetId = "1NaP8qVpDOYBshvFSycsI670R-2ym7NLYkuTA8ej4ta4";
  const ranges: string[] = [];
  ranges.push("Week 1!A2:G23");
  ranges.push("Week 2!A2:G23");
  ranges.push("Week 3!A2:G23");
  ranges.push("Week 4!A2:G23");
  ranges.push("Week 5!A2:G23");
  ranges.push("Week 6!A2:G23");
  const rangeString = createRangeString(ranges);

  const headers = ["court", "round", "team1", "", "team2", "", "ref"];
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?${rangeString}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((response: Sheet) => {
      const values = response.valueRanges;
      if (values.length) {
        // filter out all the cruff
        const info = values.map((sheet: SheetValues) => {
          const values = sheet.values;
          return values
            .filter((row: string[]) => row.length)
            .map((row: string[]) => {
              const newRow = {} as Headers;

              for (let i = 0; i < row.length; i++) {
                if (row[i]) {
                  newRow[headers[i]] = row[i];
                }
              }

              return newRow;
            });
        });
        return info;
      } else {
        console.log("No data found.");
      }
    });
}

function createRangeString(ranges: string[]): string {
  let returnVal = "";
  ranges.forEach((range) => {
    returnVal += `ranges=${range}&`;
  });

  return returnVal.slice(0, -1);
}

export { getOpenDataFromGoogleSheet, getLeagueScheduleFromGoogleSheet };
