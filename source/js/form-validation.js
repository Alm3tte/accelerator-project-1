document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.promo__form');
  const inputs = form.querySelectorAll('.form__input');

  inputs.forEach((input) => {
    const errorElement = input.nextElementSibling;

    input.addEventListener('invalid', () => {
      input.classList.add('form__input--error');
      errorElement.style.display = 'block';
      errorElement.style.opacity = '1';
    });

    input.addEventListener('input', () => {
      if (input.validity.valid) {
        input.classList.remove('form__input--error');
        errorElement.style.display = 'none';
        errorElement.style.opacity = '0';
      }
    });
  });

  form.addEventListener('submit', (event) => {
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.validity.valid) {
        isValid = false;
        const errorElement = input.nextElementSibling;
        input.classList.add('form__input--error');
        errorElement.style.display = 'block';
        errorElement.style.opacity = '1';
      }
    });
    if (!isValid) {
      event.preventDefault();
    }
  });
});
