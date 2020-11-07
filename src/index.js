import { createPageHeader, createNavBar } from './title-slogan-nav';
import { createMenuContent } from './menu';
import { createAboutContent } from './about';
import { createContactContent } from './contact';

const switchContent = () => {
  const menuContent = createMenuContent();
  const aboutContent = createAboutContent();
  const contactContent = createContactContent();
  let currentContent = '';

  const showMenu = () => {
    document.querySelector('#menu').addEventListener('click', () => {
      if (currentContent === '') {
        currentContent = menuContent;
      } else if (currentContent === contactContent) {
        currentContent = menuContent;
        document.querySelector('#content > .image-div').removeChild(contactContent);
      } else if (currentContent === aboutContent) {
        currentContent = menuContent;
        document.querySelector('#content > .image-div').removeChild(aboutContent);
      }
      document.querySelector('#content > .image-div').appendChild(menuContent);
    })
  };

  const showAbout = () => {
    document.querySelector('#about').addEventListener('click', () => {
      if (currentContent === '') {
        currentContent = aboutContent;
      } else if (currentContent === contactContent) {
        currentContent = aboutContent;
        document.querySelector('#content > .image-div').removeChild(contactContent);
      } else if (currentContent === menuContent) {
        currentContent = aboutContent;
        document.querySelector('#content > .image-div').removeChild(menuContent);
      }
      document.querySelector('#content > .image-div').appendChild(aboutContent);
    })
  };

  const showContact = () => {
    document.querySelector('#contact').addEventListener('click', () => {
      if (currentContent === '') {
        currentContent = contactContent;
      } else if (currentContent === contactContent) {
        currentContent = contactContent;
        document.querySelector('#content > .image-div').removeChild(menuContent);
      } else if (currentContent === aboutContent) {
        currentContent = contactContent;
        document.querySelector('#content > .image-div').removeChild(aboutContent);
      }
      document.querySelector('#content > .image-div').appendChild(contactContent);
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

};

switchContent();
