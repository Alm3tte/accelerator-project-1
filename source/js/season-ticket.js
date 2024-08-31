const priceButtons = document.querySelectorAll('.months__button');
const priceLists = document.querySelectorAll('.season-ticket');

const switchPriceList = (selectedId) => {
  priceLists.forEach((list) => {
    list.classList.toggle('season-ticket--activ', list.dataset.period === selectedId);
  });
};

const removeActiveButtonClass = () => {
  priceButtons.forEach((button) => {
    button.classList.remove('months__button--activ');
  });
};

const handlePriceButtonClick = (event) => {
  removeActiveButtonClass();

  const selectedId = event.target.dataset.period;
  event.target.classList.add('months__button--activ');

  switchPriceList(selectedId);
};

priceButtons.forEach((button) => {
  button.addEventListener('click', handlePriceButtonClick);
});
