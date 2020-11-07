const createContactContent = () => {
  const contactContentDiv = document.createElement('div');
  const contactTitle = document.createElement('h2');
  const contactInfo = document.createElement('p');

  contactContentDiv.id = 'contact-tab';

  contactTitle.innerHTML = 'Contact Us';
  contactInfo.innerHTML = 'Look for the juice!'

  contactContentDiv.appendChild(contactTitle);
  contactContentDiv.appendChild(contactInfo);

  //css
  contactContentDiv.style.cssText = 'position: relative;';
  contactTitle.style.cssText = 'position: absolute;';
  contactInfo.style.cssText = 'position: absolute; top: 45px;';

  return contactContentDiv;
};

export { createContactContent };