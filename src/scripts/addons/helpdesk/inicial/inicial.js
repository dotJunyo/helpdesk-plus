const CL_SUSPENSOS = document.querySelector(
  '#MetricasFila > div > a:nth-child(9) > div > div.infobox-data > span'
);
const SUSPENSOES = document.querySelector(
  '#MetricasChamados > a:nth-child(4) > div > div.infobox-data > span'
);

if (CL_SUSPENSOS.textContent) {
  console.log(CL_SUSPENSOS.textContent);
  console.log(SUSPENSOES.textContent);
}
