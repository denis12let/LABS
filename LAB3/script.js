const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const productsTitle = document.createElement('h2');
productsTitle.textContent = 'Out of T-Shirts';

const productsContainer = document.createElement('div');
productsContainer.className = 'container';

document.body.appendChild(wrapper);
wrapper.appendChild(productsTitle);
wrapper.appendChild(productsContainer);

shirts.forEach((shirt) => {
  for (const color in shirt.colors) {
    console.log(color);
    const productItem = document.createElement('div');
    productItem.className = 'product';

    const productImage = createImg(shirt.colors[color].front, 'product__img', 'Майка');
    const productBtn = createBtn('button-modal', 'Quick View');
    const productBtnSeePager = createBtn('button-pager', 'See Pager');

    productBtn.onclick = () => showModalProduct(productItem);

    const productButtons = document.createElement('div');
    productButtons.className = 'product__buttons';
    productButtons.appendChild(productBtn);
    productButtons.appendChild(productBtnSeePager);

    productItem.appendChild(productImage);
    productItem.innerHTML += `<h3>${shirt.name}</h3>`;
    productItem.innerHTML += `<p>${shirt.price}</p>`;
    productItem.appendChild(productButtons);

    productsContainer.appendChild(productItem);
  }
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
