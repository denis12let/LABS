const canvas = document.getElementById('canvas');
const shapeSelector = document.getElementById('shapeSelector');
let isDrawing = false;
let startX, startY, currentCircle, currentRect;
const resetButton = document.querySelector('.resetBtn');

function initGraph() {
  canvas.addEventListener('mousedown', (event) => clickDownHandler(event));
  canvas.addEventListener('mousemove', (event) => moveHandler(event));
  canvas.addEventListener('mouseup', () => clickUpHandler());
  canvas.addEventListener('mouseleave', () => mouseLeaveHandler());
  resetButton.addEventListener('click', resetGraph);
}

function clickDownHandler(event) {
  isDrawing = true;
  startX = event.offsetX;
  startY = event.offsetY;

  const shape = shapeSelector.value;

  if (shape === 'circle') {
    currentCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    currentCircle.setAttribute('fill', 'black');
    currentCircle.setAttribute('stroke', 'black');
    canvas.appendChild(currentCircle);
  } else if (shape === 'rectangle') {
    currentRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    currentRect.setAttribute('fill', 'black');
    currentRect.setAttribute('stroke', 'black');
    canvas.appendChild(currentRect);
  }
}

function moveHandler(event) {
  if (!isDrawing) return;

  const endX = event.offsetX;
  const endY = event.offsetY;

  const shape = shapeSelector.value;

  if (shape === 'circle' && currentCircle) {
    const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    currentCircle.setAttribute('cx', startX);
    currentCircle.setAttribute('cy', startY);
    currentCircle.setAttribute('r', radius);
  } else if (shape === 'rectangle' && currentRect) {
    const x = Math.min(startX, endX);
    const y = Math.min(startY, endY);
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);

    currentRect.setAttribute('x', x);
    currentRect.setAttribute('y', y);
    currentRect.setAttribute('width', width);
    currentRect.setAttribute('height', height);
  }
}

function clickUpHandler() {
  isDrawing = false;
  currentCircle = null;
  currentRect = null;
}

function mouseLeaveHandler() {
  isDrawing = false;
}

function resetGraph() {
  canvas.innerHTML = '';
}

initGraph();
