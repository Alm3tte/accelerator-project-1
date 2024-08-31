document.addEventListener('DOMContentLoaded', () => {
  const faqBoxes = document.querySelectorAll('.accordion');
  const faqButtons = document.querySelectorAll('.faq__button');
  const faqItems = document.querySelectorAll('.accordion__item');

  const setInitialHeight = () => {
    const openItems = document.querySelectorAll('.accordion__item--activ .accordion__hidden');
    openItems.forEach((content) => {
      content.style.height = `${content.scrollHeight}px`;
    });
  };

  const toggleAccordionItem = (el) => {
    el.classList.toggle('accordion__item--activ');

    const button = el.querySelector('.accordion__button');
    button.classList.toggle('accordion__button--activ');

    const content = el.querySelector('.accordion__hidden');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
      content.style.height = `${content.scrollHeight}px`;
    }
  };

  const onFaqButtonClick = (el) => {
    faqButtons.forEach((btn) => {
      btn.classList.toggle('faq__button--activ', btn === el);
    });

    faqBoxes.forEach((box) => {
      box.classList.toggle('accordion--activ', box.dataset.chapter === el.dataset.chapter);
    });
  };

  faqItems.forEach((item) => {
    const isOpenByDefault = item.classList.contains('accordion__item--activ');

    if (isOpenByDefault) {
      const content = item.querySelector('.accordion__hidden');
      content.style.display = 'block';
      content.style.height = `${content.scrollHeight}px`;

      const button = item.querySelector('.accordion__button');
      button.classList.add('accordion__button--activ');
    }

    item.addEventListener('click', () => {
      toggleAccordionItem(item);
    });
  });

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => onFaqButtonClick(button));
  });

  setInitialHeight();
});
