const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const shapeSelector = document.getElementById('shapeSelector');
let isDrawing = false;
let startX, startY;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const resetButton = document.querySelector('.resetBtn');

function initGraph() {
  canvas.addEventListener('mousedown', clickDownHandler);
  canvas.addEventListener('mousemove', moveHandler);
  canvas.addEventListener('mouseup', clickUpHandler);
  canvas.addEventListener('mouseleave', mouseLeaveHandler);
  resetButton.addEventListener('click', resetGraph);
}

function clickDownHandler(event) {
  isDrawing = true;
  startX = event.offsetX;
  startY = event.offsetY;
}

function moveHandler(event) {
  if (!isDrawing) return;

  const endX = event.offsetX;
  const endY = event.offsetY;
  const shape = shapeSelector.value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (shape === 'circle') {
    const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    ctx.stroke();
  } else if (shape === 'rectangle') {
    const x = Math.min(startX, endX);
    const y = Math.min(startY, endY);
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);
    ctx.strokeRect(x, y, width, height);
  }
}

function clickUpHandler() {
  isDrawing = false;
}

function mouseLeaveHandler() {
  isDrawing = false;
}

function resetGraph() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

initGraph();
