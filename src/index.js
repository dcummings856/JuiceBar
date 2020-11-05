import { createTitle, createSlogan, createNavBar, createImageDiv, addImage } from './title-slogan-nav';
import { menuContent } from './menu';

const displayPage = (() => {
  const navBar = createNavBar();
  const menuCon = menuContent();
})();