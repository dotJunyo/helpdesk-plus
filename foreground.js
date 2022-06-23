let boolAddNumeroASC = false;
let boolAddLinkONU = false;
let boolAltTituloAba = false;
let boolAbrirPutty = false;

window.addEventListener(
  "load",
  () => {
    //EXECUTAM AUTOMATICAMENTE AO CARREGAR PÁGINA
    altTituloAba();

    //EXECUTAM APÓS CLICK POR PARTE DO USUÁRIO
    document.addEventListener("click", () => {
      addNumeroASC();
      addLinkONU();
      abrirPutty();
    });

    //ADCIONA A PORTA NA ONU
  },
  false
);

function addNumeroASC() {
  if (!boolAddNumeroASC) {
    boolAddNumeroASC = true;
    try {
      let topNav = document.querySelector(
        "body > div.navbar > div > div > a > small > i"
      );
      topNav.insertAdjacentText("afterend", " (31) 3840-7100 |");
    } catch (e) {
      console.log(e);
    }
  } else {
    return;
  }
}

function addLinkONU() {
  if (!boolAddLinkONU) {
    boolAddLinkONU = true;
    try {
      let ONU = document.querySelector(
        "#DetalheInstalacao > div.row-fluid > div:nth-child(2) > div.widget-body > dl > dd:nth-child(18) > p > span:nth-child(1)"
      );
      if (ONU.textContent.includes("ZTE F670L")) {
        let linkONU = document.querySelector(
          "#DadosConexaoPPPoE > dd:nth-child(4) > a"
        );
        let textLinkONU = linkONU.textContent;
        let tagLink = document.querySelector(
          "#DadosConexaoPPPoE > dd:nth-child(4)"
        );
        if (linkONU && !textLinkONU.includes(":62857")) {
          linkONU.textContent += ":62857";
          linkONU.href = "http://" + linkONU.textContent;
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  } else {
    return;
  }
}

function altTituloAba() {
  if (!boolAltTituloAba) {
    try {
      let nomeCliente = document.querySelector("#lblDesignacao");
      if (nomeCliente) {
        let selectCategoria = document.querySelector("#codcat");
        let primeiroNome = nomeCliente.textContent.split(" ");
        document.title =
          primeiroNome[44] +
          " - " +
          selectCategoria.options[selectCategoria.selectedIndex].text;
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    return;
  }
}

function abrirPutty() {
  if (!boolAbrirPutty) {
    boolAbrirPutty = true;
    try {
      let popLink = document.querySelector("#_pop");
      if (popLink) {
        function copiarLink(evt) {
          evt.preventDefault();
          navigator.clipboard.writeText(
            "putty.exe " + popLinkSplited[22] + " -l admin -pw P@w3r"
          );
        }

        let popLinkSplited = popLink.textContent.split(" ");
        let a = document.createElement("a");
        let linkText = document.createTextNode(popLinkSplited[22]);
        a.appendChild(linkText);
        a.title = popLinkSplited[22];
        a.textContent = popLinkSplited[22];
        a.href = "";
        a.onclick = copiarLink(event);
        popLink.textContent = popLinkSplited[20] + " - ";
        popLink.appendChild(a);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    return;
  }
}

// putty.exe 10.8.14.90 -l admin -pw P@w3r
