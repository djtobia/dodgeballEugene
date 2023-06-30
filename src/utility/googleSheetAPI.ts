async function getDataFromGoogleSheet() {
  // Authorize client using the loaded credentials
  // Get the data from the specified spreadsheet and sheet
  const spreadsheetId = "1uDOpe_oTZ5btQhZJK4dKu-xvZcY956G8aiFSSN1PCoQ";
  const range = "Sheet1!A2:D10"; // Adjust the range according to your data
  return await gapi.client
    .request({
      apiKey: "AIzaSyDjAeFHuMgWhYkLK5mxWU60zuaeuKiQfOE",
      path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      method: "GET",
    })
    .then((response) => {
      const values = response.result.values;
      if (values.length) {
        return values;
      } else {
        console.log("No data found.");
      }
    });
}
async function startSheets() {
  await gapi.client
    .init({
      apiKey: "AIzaSyDjAeFHuMgWhYkLK5mxWU60zuaeuKiQfOE",

      clientId:
        "580948235642-qli10g9mbo12e0iikp4neqivogdsomhq.apps.googleusercontent.com",
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    });
}

export { getDataFromGoogleSheet, startSheets };
