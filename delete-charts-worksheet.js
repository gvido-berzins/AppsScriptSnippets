/*
  Remove all charts from the data sheets
  */
function cleanupSheet(sheet) {
  sheet.getCharts().forEach((chart) => {
    sheet.removeChart(chart)
  })
}
