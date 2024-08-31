document.querySelector('.main-hero__button').addEventListener('click', () => {
  const targetSection = document.querySelector('.tours');

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});
