chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("from background.js", request);
  sendResponse("Hello from background.js");
});
