function showTopBar() {
  let country = "France";
  let vat = 20;
  const countryBar = document.querySelector("section.country-bar");

  setTimeout(() => {
    countryBar.innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;
  }, 1000);
}

showTopBar();
