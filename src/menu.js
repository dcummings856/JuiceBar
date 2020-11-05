const createMenuContent = () => {
  const menuContent = document.createElement('div');
  const menuTitle = document.createElement('h2');
  const menuInfo = document.createElement('p');

  menuTitle.innerHTML = 'Best Juice Ever';
  menuInfo.innerHTML = 'Wow! look at how delicious this juice is!';

menuContent.appendChild(menuTitle);
menuContent.appendChild(menuInfo);

return menuContent;
};

export { createMenuContent };