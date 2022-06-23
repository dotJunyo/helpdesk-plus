import * as jsScript from "/service-worker-utils.js";

const filter = {
  url: [
    {
      urlMatches: "helpdesk.valenet.local/*",
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  try {
    // jsScript.printOi();
  } catch (e) {
    console.error(e);
  }
}, filter);

console.log("=============================================================");
console.log("                       SCRIPT INICIADO                       ");
console.log("=============================================================");
