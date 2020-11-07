const createMenuContent = () => {
  const menuContentDiv = document.createElement('div');
  const menuTitle = document.createElement('h2');
  const menuInfo = document.createElement('p');

  menuContentDiv.id = 'menu-tab';

  menuTitle.innerHTML = 'Best Juice Ever';
  menuInfo.innerHTML = 'Wow! look at how delicious this juice is!';

  menuContentDiv.appendChild(menuTitle);
  menuContentDiv.appendChild(menuInfo);

  //css
  menuContentDiv.style.cssText = 'position: relative;';
  menuTitle.style.cssText = 'position: absolute;';
  menuInfo.style.cssText = 'position: absolute; top: 45px;';

  return menuContentDiv;
};

export { createMenuContent };