const createAboutContent = () => {
  const aboutContent = document.createElement('div');
  const aboutTitle = document.createElement('h2');
  const aboutInfo = document.createElement('p');

  aboutTitle.innerHTML = 'About Julia\'s Juice'
  aboutInfo.innerHTML = 'It\'s the best juice!';

  aboutContent.appendChild(aboutTitle);
  aboutContent.appendChild(aboutInfo);

  //css
  aboutContent.style.cssText = 'position: relative;';
  aboutTitle.style.cssText = 'position: absolute;';
  aboutInfo.style.cssText = 'position: absolute; top: 45px;';

  return aboutContent;
};

export { createAboutContent };