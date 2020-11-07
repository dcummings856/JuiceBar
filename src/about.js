const createAboutContent = () => {
  const aboutContentDiv = document.createElement('div');
  const aboutTitle = document.createElement('h2');
  const aboutInfo = document.createElement('p');

  aboutContentDiv.id = 'about-tab';

  aboutTitle.innerHTML = 'About Julia\'s Juice'
  aboutInfo.innerHTML = 'It\'s the best juice!';

  aboutContentDiv.appendChild(aboutTitle);
  aboutContentDiv.appendChild(aboutInfo);

  //css
  aboutContentDiv.style.cssText = 'position: relative;';
  aboutTitle.style.cssText = 'position: absolute;';
  aboutInfo.style.cssText = 'position: absolute; top: 45px;';

  return aboutContentDiv;
};

export { createAboutContent };