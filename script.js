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

// Portfolio Section
const portfolioSection = document.querySelector('#portfolio');

// portfolio project-details object
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
  // work-card container
  const workCard = document.createElement('ul');
  workCard.classList.add('work-card');

  // work-card-image child
  const workCardImage = document.createElement('li');
  workCardImage.classList.add('work-card-image');
  const featuredImage = document.createElement('img');
  featuredImage.setAttribute('src', project.featuredImage);
  featuredImage.setAttribute('alt', project.imgAlt);
  workCardImage.append(featuredImage);

  // work-card-content child
  const workCardContent = document.createElement('li');
  workCardContent.classList.add('work-card-content');

  //    work-card-heading grand-child
  const workCardHeading = document.createElement('h2');
  workCardHeading.classList.add('work-card-heading');
  workCardHeading.innerText = project.name;

  //    work-card-history grand-child
  const workCardHistory = document.createElement('section');
  workCardHistory.classList.add('work-card-history');

  //      work-card-profession grand-grand-child
  const workCardProfession = document.createElement('ul');
  workCardProfession.classList.add('work-card-profession');

  //        work-card-profession children
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

  // Add work-card-profession's children
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

  project.technologies.map((tech, index) => {
    langs[index].innerText = tech;
  });

  languageSection.append(lang1);
  languageSection.append(lang2);
  languageSection.append(lang3);

  const seeProjectBtn = document.createElement('a');
  seeProjectBtn.classList.add('work-card-button');
  seeProjectBtn.setAttribute('href', '#');
  seeProjectBtn.setAttribute('onclick', 'modal()');
  seeProjectBtn.innerText = 'See Project';

  // Add work-card-heading and work-card-history grand-children
  workCardContent.append(workCardHeading);
  workCardContent.append(workCardHistory);
  workCardContent.append(workCardParagraph);
  workCardContent.append(languageSection);
  workCardContent.append(seeProjectBtn);

  const model = document.createElement('section');
  // model.classList.add('d-none');
  model.append(workCardImage);
  model.append(workCardContent);

  // Add work-card-image and work-card-content children
  workCard.append(workCardImage);
  workCard.append(workCardContent);
  // workCard.append(model);

  portfolioSection.append(workCard);
});
