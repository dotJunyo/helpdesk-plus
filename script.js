let SN = document.querySelector("#mw-content-text > div.mw-parser-output > p:nth-child(1) > a:nth-child(2)");
function btnCopiarSN(){
    navigator.clipboard.writeText(SN.text);
    console.log("SN copiado!");
}