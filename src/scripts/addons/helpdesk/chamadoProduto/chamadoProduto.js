console.log('PRODUTO EXECUTADO');

const TITLE = document.querySelector(
  'body > div.navbar > div > div > a > small > i'
);
TITLE.insertAdjacentText('afterend', ' (31) 3840-7100 |');

//--------------ADICIONAR PORTA AUTOMATICAMENTE-----------------

const LINK = document.querySelector(
  '#mw-content-text > div.mw-parser-output > p:nth-child(1) > a:nth-child(1)'
);
const CONTEUDO_LINK = LINK.getAttribute('value') || '';
console.log(CONTEUDO_LINK);

let novo_link = CONTEUDO_LINK + ':62857';

LINK.href = novo_link;

console.log(novo_link);

//--------------BOTÃO DE COPIAR-----------------

let btnCopiar = document.createElement('input');
btnCopiar.type = 'button';
btnCopiar.value = '❤';

let append = document.querySelector(
  '#mw-content-text > div.mw-parser-output > p:nth-child(1) > a:nth-child(2)'
);

console.log(append.getAttribute('value') + '-----------------');

document
  .querySelector('body > div.navbar > div > div > a')
  .insertAdjacentHTML('afterend', '<button>❤</button>');

var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
