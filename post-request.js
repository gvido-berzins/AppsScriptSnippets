API_URL = "http://x-x-x-x-x.ngrok.io"

function sendDataRequest() {
  let formData = {
    "period": "20220414-20220414"
  }
  let options = {
    'method' : 'POST',
    'contentType': 'application/json',
    'payload' : JSON.stringify(formData)
  }
  UrlFetchApp.fetch(`${API_URL}/api/data`, options)
}
