import { createPageHeader, createNavBar } from './title-slogan-nav';
import { createMenuContent } from './menu';

const showMenu = () => {
  document.querySelector('#menu').addEventListener('click', () => {
    document.querySelector('#content > .image-div').appendChild(createMenuContent());  
  })
};

const homePage = () => {
  document.querySelector('#home').addEventListener('click', () => {
    location.reload();
  })
};

homePage();

showMenu();