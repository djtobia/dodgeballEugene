export default async function getDataFromGoogleSheet() {
  // Authorize client using the loaded credentials
  // Get the data from the specified spreadsheet and sheet
  const apiKey = "AIzaSyDjAeFHuMgWhYkLK5mxWU60zuaeuKiQfOE";
  const spreadsheetId = "1uDOpe_oTZ5btQhZJK4dKu-xvZcY956G8aiFSSN1PCoQ";
  const range = "Sheet1!A2:D10"; // Adjust the range according to your data
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`)
    .then((response) => response.json()).then((response) => {
      const values = response.values;
      if (values.length) {
        return values;
      } else {
        console.log("No data found.");
      }
    });
}
