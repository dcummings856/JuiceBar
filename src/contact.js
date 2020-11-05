const createContactContent = () => {
  const contactContent = document.createElement('div');
  const contactTitle = document.createElement('h2');
  const contactInfo = document.createElement('p');

  contactTitle.innerHTML = 'Contact Us';
  contactInfo.innerHTML = 'Look for the juice!'

  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactInfo);

  //css
  contactContent.style.cssText = 'position: relative;';
  contactTitle.style.cssText = 'position: absolute;';
  contactInfo.style.cssText = 'position: absolute; top: 45px;';

  return contactContent;
};

export { createContactContent };