import { createPageHeader, createNavBar } from './title-slogan-nav';
import { createMenuContent } from './menu';
import { createAboutContent } from './about';
import { createContactContent } from './contact';

  const showMenu = () => {
    document.querySelector('#menu').addEventListener('click', () => {
      document.querySelector('#content > .image-div').appendChild(createMenuContent());
    })
  };

  const showAbout = () => {
    document.querySelector('#about').addEventListener('click', () => {
      document.querySelector('#content > .image-div').appendChild(createAboutContent());  
    })
  };

  const showContact = () => {
    document.querySelector('#contact').addEventListener('click', () => {
      document.querySelector('#content > .image-div').appendChild(createContactContent());  
    })
  };

  const homePage = () => {
    document.querySelector('#home').addEventListener('click', () => {
      location.reload();
    })
  };

  homePage();
  showMenu();
  showAbout();
  showContact();
