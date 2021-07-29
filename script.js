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

// > Local Storage (it only works or stores on your current opened web page)
// 1. create a JS Object
// 2. JSON.stringify(object)
// 3. localStorage.setItem('data', JSON.stringify(obj));  // Set Data
// 4. localStorage.getItem('data'); // Get Data
// 5. localStorage.removeItem('data'); // Remove Data
// 6. localStorage.clear() // clear everything in localStorage

// > Session Storage (If you close your browser and open it back, session storage will be empty
// 1. create a JS Object
// 2. JSON.stringify(object)
// 3. localStorage.setItem('data', JSON.stringify(obj));  // Set Data
// 4. localStorage.getItem('data'); // Get Data
// 5. localStorage.removeItem('data'); // Remove Data
// 6. localStorage.clear() // clear everything in localStorage
