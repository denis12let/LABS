const targets = document.querySelectorAll('.target');

targets.forEach((item) => {
  let isSelected = false;
  let offsetX, offsetY;
  let isAssigned = false;
  let prevPos = {
    top: 0,
    left: 0,
  };

  item.addEventListener('mousedown', (mouse) => clickDownHandler(mouse));
  document.addEventListener('mouseup', () => clickUpHandler());
  document.addEventListener('mousemove', (mouse) => moveSelectedItem(mouse));
  item.addEventListener('dblclick', () => dbClickHandler());
  document.addEventListener('click', () => dbClickCancelHandler());
  document.addEventListener('keydown', (e) => pressESCHandler(e));

  function clickDownHandler(mouse) {
    if (!isAssigned) {
      isSelected = true;

      offsetX = mouse.clientX - item.getBoundingClientRect().left;
      offsetY = mouse.clientY - item.getBoundingClientRect().top;
    }
  }

  function clickUpHandler() {
    isSelected = false;
  }

  function moveSelectedItem(mouse) {
    if (isSelected) {
      item.style.top = `${mouse.clientY - offsetY}px`;
      item.style.left = `${mouse.clientX - offsetX}px`;
    }
  }

  function moveAssignedItem(mouse) {
    if (isAssigned) {
      item.style.top = `${mouse.clientY - offsetY}px`;
      item.style.left = `${mouse.clientX - offsetX}px`;
    }
  }

  function dbClickHandler() {
    isAssigned = true;

    prevPos.top = item.style.top;
    prevPos.left = item.style.left;
    item.style.backgroundColor = 'black';
    document.addEventListener('mousemove', moveAssignedItem);
  }

  function dbClickCancelHandler() {
    if (isAssigned) {
      isAssigned = false;

      item.style.backgroundColor = 'red';
      document.removeEventListener('mousemove', moveAssignedItem);
    }
  }

  function pressESCHandler(e) {
    if ((isAssigned || isSelected) && e.key === 'Escape') {
      isSelected = false;
      isAssigned = false;

      item.style.top = prevPos.top;
      item.style.left = prevPos.left;

      item.style.backgroundColor = 'red';
      document.removeEventListener('mousemove', moveAssignedItem);
    }
  }
});
