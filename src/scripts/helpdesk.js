console.log('PRODUTO EXECUTADO');
document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'interactive') {
    console.log('PRODUTO EXECUTADO');

    const TITLE = document.querySelector(
      'body > div.navbar > div > div > a > small > i'
    );
    TITLE.insertAdjacentText('afterend', ' (31) 3840-7100 |');
  }
});
