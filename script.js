'use strict';

const container = document.getElementById('container');
const clear = document.getElementById('clear');
const overwrite = document.getElementById('overwrite');

overwrite.addEventListener('click', () => {
  let pixels = prompt('Enter the amount of pixels');
  container.style.width = pixels;
  draw();
});

function draw() {
  container.textContent = '';
  
  for (let i = 0; i < 224; i++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'item';
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = '#000';
    });

    clear.addEventListener('click', () => {
      cell.style.backgroundColor = '#FFF';
    });
  }
}

draw();
