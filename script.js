const body = document.querySelector('body');
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

const portfolioSection = document.querySelector('#portfolio');

const projectDetails = [
  {
    id: 1,
    name: 'Tonic',
    caption: 'CANOPY',
    featuredImage: './images/portfolio-1.png',
    imgAlt: 'portfolio-1',
    circleImage: './images/counter.svg',
    circleAlt: 'circle-icon',
    paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://zainsadaqat.github.io/portfolio/',
    sourceCode: 'https://github.com/zainsadaqat/portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    caption: 'CANOPY',
    featuredImage: './images/portfolio-2.png',
    imgAlt: 'portfolio-2',
    circleImage: './images/counter.svg',
    circleAlt: 'circle-icon',
    paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://zainsadaqat.github.io/portfolio/',
    sourceCode: 'https://github.com/zainsadaqat/portfolio',
  },
  {
    id: 3,
    name: 'Facebook 360',
    caption: 'CANOPY',
    featuredImage: './images/portfolio-3.png',
    imgAlt: 'portfolio-3',
    circleImage: './images/counter.svg',
    circleAlt: 'circle-icon',
    paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://zainsadaqat.github.io/portfolio/',
    sourceCode: 'https://github.com/zainsadaqat/portfolio',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    caption: 'CANOPY',
    featuredImage: './images/portfolio-4.png',
    imgAlt: 'portfolio-4',
    circleImage: './images/counter.svg',
    circleAlt: 'circle-icon',
    paragraph:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://zainsadaqat.github.io/portfolio/',
    sourceCode: 'https://github.com/zainsadaqat/portfolio',
  },
];

projectDetails.forEach((project) => {
  const workCard = document.createElement('ul');
  workCard.classList.add('work-card');

  const workCardImage = document.createElement('li');
  workCardImage.classList.add('work-card-image');
  const featuredImage = document.createElement('img');
  featuredImage.setAttribute('src', project.featuredImage);
  featuredImage.setAttribute('alt', project.imgAlt);
  workCardImage.append(featuredImage);

  const workCardContent = document.createElement('li');
  workCardContent.classList.add('work-card-content');

  const workCardHeading = document.createElement('h2');
  workCardHeading.classList.add('work-card-heading');
  workCardHeading.innerText = project.name;

  const workCardHistory = document.createElement('section');
  workCardHistory.classList.add('work-card-history');

  const workCardProfession = document.createElement('ul');
  workCardProfession.classList.add('work-card-profession');

  const listItem1 = document.createElement('li');
  const caption = document.createElement('h3');
  caption.classList.add('work-card-caption');
  caption.innerText = project.caption;
  listItem1.append(caption);

  const listItem2 = document.createElement('li');
  const circle1 = document.createElement('img');
  circle1.setAttribute('src', project.circleImage);
  circle1.setAttribute('alt', project.circleAlt);
  listItem2.append(circle1);

  const listItem3 = document.createElement('li');
  listItem3.innerText = 'Back End Dev';

  const listItem4 = document.createElement('li');
  const circle2 = document.createElement('img');
  circle2.setAttribute('src', project.circleImage);
  circle2.setAttribute('alt', project.circleAlt);
  listItem4.append(circle2);

  const listItem5 = document.createElement('li');
  listItem5.innerText = '2015';

  workCardProfession.append(listItem1);
  workCardProfession.append(listItem2);
  workCardProfession.append(listItem3);
  workCardProfession.append(listItem4);
  workCardProfession.append(listItem5);

  workCardHistory.append(workCardProfession);

  const workCardParagraph = document.createElement('p');
  workCardParagraph.classList.add('work-card-paragraph');
  workCardParagraph.innerText = project.paragraph;

  const languageSection = document.createElement('ul');
  languageSection.classList.add('languages-section');

  const lang1 = document.createElement('li');
  lang1.classList.add('programming-language');
  const lang2 = document.createElement('li');
  lang2.classList.add('programming-language');
  const lang3 = document.createElement('li');
  lang3.classList.add('programming-language');

  const langs = [lang1, lang2, lang3];

  project.technologies.forEach((tech, index) => {
    langs[index].innerText = tech;
  });

  languageSection.append(lang1);
  languageSection.append(lang2);
  languageSection.append(lang3);

  const seeProjectBtn = document.createElement('a');
  seeProjectBtn.classList.add('work-card-button');
  seeProjectBtn.setAttribute('href', '#popup-window');
  seeProjectBtn.innerText = 'See Project';

  const pupupHeading = document.querySelector('h2.work-card-heading');
  const popupImage = document.querySelector('.popup-image img');
  const liveCodeLink = document.querySelector('#live-link');
  const sourceCodeLink = document.querySelector('#source-link');

  const popupContainer = document.querySelector('ul.popup-container');
  seeProjectBtn.addEventListener('click', () => {
    pupupHeading.innerText = project.name;
    popupImage.setAttribute('src', project.featuredImage);
    liveCodeLink.setAttribute('href', project.liveLink);
    sourceCodeLink.setAttribute('href', project.sourceCode);
    popupContainer.classList.remove('d-none');
    body.classList.add('overlay');
  });

  const cancelBtn = document.querySelector('.cancel-button');

  cancelBtn.addEventListener('click', () => {
    popupContainer.classList.add('d-none');
    body.classList.remove('overlay');
  });

  workCardContent.append(workCardHeading);
  workCardContent.append(workCardHistory);
  workCardContent.append(workCardParagraph);
  workCardContent.append(languageSection);
  workCardContent.append(seeProjectBtn);

  workCard.append(workCardImage);
  workCard.append(workCardContent);

  portfolioSection.append(workCard);

  const form = document.querySelector('.form');
  const validateEmail = document.querySelector('input[type=email]');
  const errorMessagesContainer = document.querySelector('.error-messages');

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

  const storeName = document.querySelector('input[type=text]');
  const storeEmail = document.querySelector('input[type=email]');
  const storeMessage = document.querySelector('.input-textarea');
  const userDetails = {};

  (() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    const { name, email, message } = storedUserDetails;
    storeName.value = name;
    storeEmail.value = email;
    storeMessage.value = message;
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
});
