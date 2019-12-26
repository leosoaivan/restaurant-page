import { createMenu } from './menu.js'
import { createContact } from './contact.js'

const content = document.querySelector('.content');

// const createImage = () => {
//   const myImage = new Image();
//   myImage.src = Image;
//   content.appendChild(myImage);
// };

const createTitle = () => {
  const title = document.createElement('h1');
  title.innerText = 'The LA Cafe - Home Page';
  content.appendChild(title);
};

const createNav = () => {
  const navbar = document.createElement('ul');
  content.appendChild(navbar);

  const home = document.createElement('li');
  navbar.appendChild(home);
  const homeLink = document.createElement('a');
  homeLink.addEventListener('click', () => {
    createHome();
  });
  homeLink.innerText = 'Home';
  home.appendChild(homeLink);

  const menu = document.createElement('li');
  navbar.appendChild(menu);
  const menuLink = document.createElement('a');
  menuLink.addEventListener('click', () => {
    createMenu();
  });
  menuLink.innerText = 'Menu';
  menu.appendChild(menuLink);

  const contact = document.createElement('li');
  navbar.appendChild(contact);
  const contactLink = document.createElement('a');
  contactLink.addEventListener('click', () => {
    createContact();
  });
  contactLink.innerText = 'Contact';
  contact.appendChild(contactLink);
};

const createDescription = () => {
  const description = document.createElement('h4');
  description.innerText = 'Come by the LA Cafe for the best LA type cafe food in Los Angeles!';
  content.appendChild(description);
};

const createHome = () => {
  content.innerHTML = '';
  createTitle();
  createNav();
  // createImage();
  createDescription();
};

export { createHome };
