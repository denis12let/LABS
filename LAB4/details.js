const shirtItem = JSON.parse(localStorage.getItem('shirt'));

let currColor = Object.keys(shirtItem.colors)[0];
let currSide = 'front';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const shirt = document.createElement('div');
shirt.className = 'shirt';

const container = document.createElement('div');
container.className = 'container';

const shirtInner = document.createElement('div');
shirtInner.className = 'shirt__inner';

const title = document.createElement('h2');
title.className = 'title';
title.textContent = shirtItem.name;

const item = document.createElement('div');
item.className = 'item';

const img = document.createElement('img');
img.src = shirtItem.colors[currColor].front;
img.alt = 'shirt';
img.className = 'item__img';

const itemInfo = document.createElement('div');
itemInfo.className = 'item__info';

const infoWrap = document.createElement('div');
infoWrap.className = 'item__info-wrap';

const price = document.createElement('p');
price.className = 'item__price';
price.textContent = shirtItem.price;

const description = document.createElement('p');
description.className = 'item__description';
description.textContent = shirtItem.description;

const itemSide = document.createElement('div');
itemSide.className = 'item__side';

const sideTitle = document.createElement('div');
sideTitle.className = 'item__side-title';
sideTitle.textContent = 'Side: ';

const frontButton = document.createElement('button');
frontButton.className = 'item__side-btn--front';
frontButton.textContent = 'Front';
frontButton.disabled = true;

const backButton = document.createElement('button');
backButton.className = 'item__side-btn--back';
backButton.textContent = 'Back';

itemSide.appendChild(sideTitle);
itemSide.appendChild(frontButton);
itemSide.appendChild(backButton);

const itemColors = document.createElement('div');
itemColors.className = 'item__colors';

const colorsTitle = document.createElement('div');
colorsTitle.className = 'item__colors-title';
colorsTitle.textContent = 'Color: ';

const colorsList = document.createElement('ul');
colorsList.className = 'item__colors-list';

// const colorButtons = ['12323', '12323', '12323', '12323', '12323'];

for (const color in shirtItem.colors) {
  const colorItem = document.createElement('li');
  colorItem.className = 'item__color';

  const colorButton = document.createElement('button');
  colorButton.className = 'item__color-btn';
  colorButton.textContent = color;
  colorButton.style.background = color;

  if (color === 'white') {
    colorButton.style.color = '#000';
  } else {
    colorButton.style.color = '#fff';
  }

  colorItem.appendChild(colorButton);
  colorsList.appendChild(colorItem);

  colorButton.onclick = () => colorHandler(color);
}

itemColors.appendChild(colorsTitle);
itemColors.appendChild(colorsList);

infoWrap.appendChild(price);
infoWrap.appendChild(description);
infoWrap.appendChild(itemSide);
infoWrap.appendChild(itemColors);

const backToButton = document.createElement('button');
backToButton.className = 'back';
backToButton.textContent = 'Back';

itemInfo.appendChild(infoWrap);
itemInfo.appendChild(backToButton);

item.appendChild(img);
item.appendChild(itemInfo);

shirtInner.appendChild(title);
shirtInner.appendChild(item);
container.appendChild(shirtInner);
shirt.appendChild(container);
wrapper.appendChild(shirt);

document.body.appendChild(wrapper);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

backToButton.onclick = () => (window.location.href = 'index.html');
frontButton.onclick = () => frontButtonHandler();
backButton.onclick = () => backButtonHandler();

function frontButtonHandler() {
  currSide = 'front';
  frontButton.disabled = true;
  backButton.disabled = false;
  const shirtImg = document.querySelector('.item__img');
  shirtImg.src = shirtItem.colors[currColor][currSide];
}

function backButtonHandler() {
  currSide = 'back';
  frontButton.disabled = false;
  backButton.disabled = true;
  const shirtImg = document.querySelector('.item__img');
  shirtImg.src = shirtItem.colors[currColor][currSide];
}

function colorHandler(color) {
  currColor = color;
  const shirtImg = document.querySelector('.item__img');
  shirtImg.src = shirtItem.colors[currColor][currSide];
}
