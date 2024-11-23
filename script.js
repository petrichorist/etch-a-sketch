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

for (let i = 0; i < 162; i++) {
  const cell = document.createElement('div');
  container.appendChild(cell).className = 'item';
  cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = '#000';
  });

  clear.addEventListener('click', () => {
    cell.style.backgroundColor = '#FFF';
  })
}
