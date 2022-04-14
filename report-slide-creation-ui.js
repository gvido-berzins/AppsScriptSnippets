/*
  A sample prompt for an entry point to creating reporting slides
  using an existing datasheet
  */
function createReport() {
  const prompt = ui.prompt(
      'Please input the ID of the data spreadsheet',
      ui.ButtonSet.OK_CANCEL);

  const button = prompt.getSelectedButton()
  const sheetId = prompt.getResponseText()
  const reportSlideUrl = "TBD"
  if (button == ui.Button.OK) {
    ui.alert(
      'New Report Sheet generated!\n' +
      `from sheet: ${sheetId}` +
      `URL: ${reportSlideUrl}`
    )
  }
}
