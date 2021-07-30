const hamburgerBtn = document.querySelector('.hamburger-menu');
const crossBtn = document.querySelector('.cross');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelector('ul.mobile-menu-items');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('d-block');
});

crossBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('d-block');
});

mobileMenuItems.addEventListener('click', () => {
  mobileMenu.classList.toggle('d-block');
});

const form = document.querySelector('.form');
const validateEmail = document.querySelector('input[type=email]');
const errorMessagesContainer = document.querySelector('.error-messages');
form.addEventListener('submit', (e) => {
  const errorMessages = [];
  if (validateEmail.value !== validateEmail.value.toLowerCase()) {
    errorMessages.push('Email should be in lowercase');
  }
  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
});

const showErrors = (errors) => {
  errors.forEach((error) => {
    const li = document.createElement('li');
    li.innerText = error;
    li.classList.add('programming-language');
    li.style.color = 'red';
    li.style.marginBottom = '16px';
    li.style.padding = '14px';
    errorMessagesContainer.append(li);
  });
  errorMessagesContainer.classList.toggle('d-none');
};
