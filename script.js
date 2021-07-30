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

const storeName = document.querySelector('input[type=text]');
const storeEmail = document.querySelector('input[type=email]');
const storeMessage = document.querySelector('.input-textarea');
const userDetails = {};

(() => {
  const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
  const { name, email, message } = storedUserDetails;
  storeName.value = name ? name : '';
  storeEmail.value = email ? email : '';
  storeMessage.value = message ? message : '';
})();

storeName.addEventListener('input', (e) => {
  userDetails.name = e.target.value;
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
});

storeEmail.addEventListener('input', (e) => {
  userDetails.email = e.target.value;
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
});

storeMessage.addEventListener('input', (e) => {
  userDetails.message = e.target.value;
  localStorage.setItem('userDetails', JSON.stringify(userDetails));
});
