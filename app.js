const nav = document.querySelector('.nav-open');
const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.nav-open .link ');
const html = document.querySelector('html');
const workSection = document.querySelector('.works-section');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const holding = document.querySelector('.holding');
const headline = document.querySelector('.headline');
const modalTitle = document.querySelector('.headline h3');
const closeImg = document.querySelector('.headline img');
const modalTags = document.querySelector('.holding .tags-holder');
const modalImgHolder = document.querySelector('.modal-img');
const modalImg = document.querySelector('.modal-img img');
const modalInfo = document.querySelector('.modal-info');
const modalDesc = modalInfo.querySelector('p');
const modalSkills = document.querySelector('.modal-skills');
const children = modalSkills.querySelectorAll('li');
const submit = document.querySelector('form');
const resultMsg = document.querySelector('.msg');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const msgInput = document.getElementById('message');
const inputs = document.querySelectorAll('.koko');
const handelNavClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

burgerMenu.addEventListener('click', handelNavClick);

const handelLinkClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

links.forEach((lin) => {
  lin.addEventListener('click', handelLinkClick);
});

// data
const cardsData = [
  {
    className: ['tonic', 'order3'],
    imgSrcMob: './imgs/FoodVille mock.png',
    imgSrcDesk: './imgs/FoodVille mock.png',
    skills: ['Kotlin', 'Jetpack Compose', 'Android'],
    modalSkills: new Set(['Kotlin', 'Jetpack Compose']),
    title: 'FoodVille',
    canopy: 'Food Order',
    koko: '',
    desc: 'A Food Order app for a restaurant.',
    breif:
      'This food ordering app makes it easy for users to order their favorite meals from a restaurant. With a wide selection of food items to choose from, a search function, and the ability to save favorite items, users can order food quickly and easily. The app also allows users to add multiple locations and choose a location when they place an order, making it even more convenient. With both a dark and light theme and a deals section, this app provides a user-friendly and enjoyable ordering experience. ',
  },
  {
    className: ['tonic', 'order1'],
    imgSrcMob: './imgs/calorie_counter.png',
    imgSrcDesk: './imgs/calorie_counter.png',
    skills: ['Kotlin', 'Jetpack Compose', 'Android'],
    modalSkills: new Set(['Kotlin', 'Jetpack Compose']),
    title: 'Calorie Counter',
    canopy: 'Calorie And Food Tracker',
    koko: '',
    desc: 'A calorie tracker android app.',
    breif:
      'This calorie tracker app is designed to help users achieve their health and fitness goals by tracking their daily caloric intake. With user inputs such as age, weight, height, and gender, the app calculates the required daily caloric intake. Users can log their daily meals and group them by meal type, search the food database, and make informed decisions about what to eat. The app features both a dark and light theme and a user-friendly interface, making it easy for users to track their progress towards their goals. ',
  },
  {
    className: ['tonic', 'order2'],
    imgSrcMob: './imgs/plant_watering.png',
    imgSrcDesk: './imgs/plant_watering.png',
    skills: ['Kotlin', 'Jetpack Compose', 'Android'],
    modalSkills: new Set(['Kotlin', 'Jetpack Compose']),
    title: 'WaterMe',
    canopy: 'Plant Watering Reminder',
    koko: '',
    desc: 'A plant watering reminder App.',
    breif:
      "This plant watering reminder app helps users keep their plants healthy and thriving by providing reminders to water them. Users can add their plants with pictures, set up reminders, and receive notifications when it's time to water each plant. The app also allows users to add information about each plant, such as its name and placement, and features a search and filter functionality for easy organization. With a user-friendly interface and visually appealing design, this app is a must-have for anyone who loves plants. ",
  },
];

// Creating cards dynamicly
cardsData.forEach((card) => {
  // holders
  const parent = document.createElement('div');
  const group = document.createElement('div');
  const image = document.createElement('div');
  const tagsHolder = document.createElement('div');
  const skills = document.createElement('ul');

  // children
  const mobileImg = document.createElement('img');
  const desktopImg = document.createElement('img');
  const button = document.createElement('button');

  // text
  const title = document.createElement('h2');
  const canopy = document.createElement('h3');
  const desc = document.createElement('p');

  // tags
  const dot = document.createElement('div');
  const dot2 = document.createElement('div');
  const tag = document.createElement('span');
  const tag2 = document.createElement('span');

  // set classes
  parent.classList.add(...card.className);
  group.classList.add('group');
  image.classList.add('image');
  mobileImg.classList.add('mobile-img');
  desktopImg.classList.add('desktop-img');
  tagsHolder.classList.add('tags-holder');
  skills.classList.add('skills');
  button.classList.add('view-project');
  canopy.classList.add('canopy');
  tag.classList.add('tag');
  tag2.classList.add('tag');
  dot2.classList.add('dot');
  dot.classList.add('dot');

  // set inner text values
  desc.innerText = card.desc;
  title.innerText = card.title;
  canopy.innerText = card.canopy;
  // tag.innerText = 'Back End Dev';
  // tag2.innerText = '2022';
  button.innerText = 'See project';

  // set img src
  mobileImg.src = card.imgSrcMob;
  desktopImg.src = card.imgSrcDesk;

  // append children
  image.append(mobileImg, desktopImg);
  tagsHolder.append(dot, canopy);
  let contet = '';
  card.skills.forEach((skl) => {
    contet += `<li class='btn-skill'>${skl}</li>`;
    skills.innerHTML = contet;
  });

  group.append(title, tagsHolder, desc, skills, button);
  parent.append(image, group);
  workSection.appendChild(parent);

  // handel click event
  button.addEventListener('click', function () {
    modal.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // set classes
    modal.classList.add('modal');
    holding.classList.add('holding');
    headline.classList.add('headline');
    overlay.classList.add('active-modal');
    html.classList.add('modal-noscroll');

    // set text value
    modalTitle.textContent = card.title;
    modalImg.src = card.imgSrcDesk;
    modalDesc.textContent = card.breif;
    let skillContetnt = '';
    card.modalSkills.forEach((skl) => {
      skillContetnt += `<li class='btn-skill'>${skl}</li>`;
      modalSkills.innerHTML = skillContetnt;
    });
    skillContetnt = '';
  });
});

overlay.addEventListener('click', function (e) {
  if (e.target.classList.contains('overlay')) {
    overlay.classList.remove('active-modal');
    html.classList.remove('modal-noscroll');
  }
});

closeImg.addEventListener('click', function (e) {
  overlay.classList.remove('active-modal');
  html.classList.remove('modal-noscroll');
});

// handel form validation
submit.addEventListener('submit', function (e) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    resultMsg.textContent = 'Email must be in lower case';
    resultMsg.style.color = 'red';
    return false;
  }
});

const { inputName, email, message } = JSON.parse(
  localStorage.getItem('formData')
);

const formData = {
  inputName,
  email,
  message,
};

// localstorage part

inputs.forEach((inp) => {
  inp.addEventListener('keyup', function (e) {
    let { name, value } = e.target;
    formData[name] = value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const { inputName, email, message } = JSON.parse(
    localStorage.getItem('formData')
  );
  nameInput.value = inputName;
  emailInput.value = email;
  msgInput.value = message;
});
