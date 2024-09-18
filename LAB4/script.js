const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const productsTitle = document.createElement('h2');
productsTitle.textContent = 'Out of T-Shirts';

const productsContainer = document.createElement('div');
productsContainer.className = 'container';

document.body.appendChild(wrapper);
wrapper.appendChild(productsTitle);
wrapper.appendChild(productsContainer);

let shirtId = 0;

shirts.forEach((shirt) => {
  const productItem = document.createElement('div');
  productItem.className = 'product';
  productItem.id = shirtId;
  shirtId++;

  const productImage = createImg(shirt.colors.white.front, 'product__img', 'Майка');
  const productBtn = createBtn('button-modal', 'Quick View');
  const productBtnSeePager = createBtn('button-pager', 'See Pager');
  productBtnSeePager.id = shirtId;

  const productItemTitle = document.createElement('h3');
  productItemTitle.textContent = shirt.name;

  const productItemPrice = document.createElement('p');
  productItemTitle.textContent = shirt.price;

  productBtn.onclick = () => showModalProduct(productItem);

  const productButtons = document.createElement('div');
  productButtons.className = 'product__buttons';
  productButtons.appendChild(productBtn);
  productButtons.appendChild(productBtnSeePager);

  productItem.appendChild(productImage);
  productItem.appendChild(productItemTitle);
  productItem.appendChild(productItemPrice);
  productItem.appendChild(productButtons);

  productsContainer.appendChild(productItem);
});

function showModalProduct(product) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'overlay';

  const productItemModal = document.createElement('div');
  productItemModal.className = 'modal';

  const productImage = product.querySelector('.product__img').cloneNode();

  const button = createBtn('modal__button', 'Out');
  button.onclick = () => hideModalProduct(productItemModal, modalOverlay);

  productItemModal.append(productImage);
  productItemModal.appendChild(button);

  wrapper.appendChild(productItemModal);
  wrapper.appendChild(modalOverlay);
}

function hideModalProduct(modal, modalOverlay) {
  if (modal) {
    wrapper.removeChild(modal);
    wrapper.removeChild(modalOverlay);
  }
}

function createImg(imgSrc, className, alt) {
  const productImage = document.createElement('img');
  productImage.className = className;
  productImage.src = imgSrc;
  productImage.alt = alt;

  return productImage;
}

function createBtn(className, text) {
  const button = document.createElement('button');
  button.className = className;
  button.textContent = text;

  return button;
}
