'use strict';

const container = document.getElementById('container');
const clear = document.getElementById('clear');
const overwrite = document.getElementById('overwrite');
let opacity = 0.0;

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
      let first = Math.floor(Math.random() * 255);
      let second = Math.floor(Math.random() * 255);
      let third = Math.floor(Math.random() * 255);
      opacity += 0.1;
      cell.style.opacity = `${opacity}`;
      cell.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
    });

    clear.addEventListener('click', () => {
      cell.style.backgroundColor = '#FFF';
      opacity = 0.1;
    });
  }
}

draw();
