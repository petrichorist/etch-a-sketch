'use strict';

// const container = document.getElementById("container");

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (let c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(16, 16);

const container = document.getElementById('container');
const clear = document.getElementById('clear');
const overwrite = document.getElementById('overwrite');

overwrite.addEventListener('click', () => {
  let pixels = prompt('Enter the amount of pixels');
  container.style.width = pixels;
  ligma();
});

function ligma() {
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

ligma();
