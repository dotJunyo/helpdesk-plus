//------MAIN HELPDESK------
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^httpS/.helpdesk.valenet.local) {
  }
});
