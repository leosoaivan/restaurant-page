import { createCommon } from './common.js'

const content = document.querySelector('.content');

const createDescription = () => {
  const description = document.createElement('h4');
  description.innerText = 'Come by the LA Cafe for the best LA type cafe food in Los Angeles!';
  content.appendChild(description);
};

const createHome = () => {
  content.innerHTML = '';
  createCommon();
  // createImage();
  createDescription();
};

export { createHome };
