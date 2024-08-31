document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.promo__form');
  const nameInput = form.querySelector('#name');
  const phoneInput = form.querySelector('#phone');
  const nameError = nameInput.nextElementSibling;
  const phoneError = phoneInput.nextElementSibling;

  const showError = (input, errorElement, message) => {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    errorElement.style.opacity = '1';
    input.classList.add('form__input--error');
  };

  const clearError = (input, errorElement) => {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    errorElement.style.opacity = '0';
    input.classList.remove('form__input--error');
  };

  const validateName = () => {
    const value = nameInput.value.trim();
    if (value === '') {
      showError(nameInput, nameError, 'Поле не заполнено!');
      return false;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(value)) {
      showError(nameInput, nameError, 'Имя должно содержать только буквы!');
      return false;
    } else {
      clearError(nameInput, nameError);
      return true;
    }
  };

  const validatePhone = () => {
    const value = phoneInput.value.trim();
    if (value === '') {
      showError(phoneInput, phoneError, 'Поле не заполнено!');
      return false;
    } else if (!/^\+7\d{10}$/.test(value)) {
      showError(phoneInput, phoneError, 'Телефон должен начинаться с +7!');
      return false;
    } else {
      clearError(phoneInput, phoneError);
      return true;
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isPhoneValid = validatePhone();

    if (isNameValid && isPhoneValid) {
      form.submit();
    }
  });

  nameInput.addEventListener('input', () => clearError(nameInput, nameError));
  phoneInput.addEventListener('input', () => clearError(phoneInput, phoneError));
});
