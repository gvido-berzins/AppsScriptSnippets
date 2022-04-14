
/*
  Create a custom prompt using the existing html
  */
function createCustom prompt() {
  let widget = HtmlService.createHtmlOutputFromFile("custom-prompt.html")
  ui.showModalDialog(widget, "Super prompt")
}
