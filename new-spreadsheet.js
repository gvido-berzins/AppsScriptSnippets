/*
  Creates a spreadsheet and returns the URL
  */
function createSpreadsheet(name) {
  const ss = SpreadsheetApp.create(name)
  const url = ss.getUrl()
  Logger.log(`Created Spreadsheet: '${name}', ${url}`)
  return url
}
