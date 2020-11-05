/*css for #content div*/
const contentDivCss = (() => {
  document.querySelector('#content').style.cssText = 'font-family: sans-serif;'
})();

/*Creating HTML elements*/
const createTitle = (() => {
  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML = 'Julia\'s Juice Bar'
  document.querySelector('#content').appendChild(title);

  //css
  title.style.cssText = 'font-size: 40px; color: #F7B32B; background-color: #A9E5BB; margin: 0;';
})();

const createSlogan = (() => {
  const slogan = document.createElement('h3');
  slogan.className = 'slogan';
  slogan.innerHTML = 'Best Juice in Town!';
  document.querySelector('#content').appendChild(slogan);

  //css
  slogan.style.cssText = 'color: #F72C25; background-color: #FCF6B1; margin: 0px;';
})();

const createNavBar = (() => {
  const ul = document.createElement('ul');

  ul.className = 'navbar';
  document.querySelector('#content').appendChild(ul);

  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    const liId = ['menu','about','contact'];

    li.className = 'nav-btns';
    li.id = liId[i];
    li.innerHTML = liId[i];
    li.style.cssText = 'display: inline; padding: 0 10px; color: #2D1E2F; background-color: #A9E5BB;'
    document.querySelector('#content > .navbar').append(li)
  }

  //css
  ul.style.cssText = 'list-style-type: none; margin: 0; padding: 0; cursor: pointer;';
})();

const createImageDiv = (() => {
  const imageDiv = document.createElement('div');

  imageDiv.className = 'image-div';
  document.querySelector('#content').appendChild(imageDiv);
})();

const addImage = (() => {
  const image = document.createElement('img');
  image.className = 'juice-image';
  image.src = 'juicebarphoto.jpg';
  document.querySelector('#content > .image-div').appendChild(image); 

  //css
  document.querySelector('.juice-image').style.cssText = 'width: 100%; min-height: 600px; opacity: 0.4; margin: 0; padding: 0;';
})();

export { createTitle, createSlogan, createNavBar, createImageDiv, addImage };