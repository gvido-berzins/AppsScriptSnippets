
/*
  Create a custom menu with an item linking to a function
  called `createReport()`
  */
function onOpen() {
  ui.createMenu('Report Generation')
      .addItem('Create Report Slides', 'createReport')
      .addToUi()
}
