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

for (let i = 0; i < 160; i++) {
  let cell = document.createElement('div');
  container.appendChild(cell).className = 'item';
  cell.addEventListener('mouseover', function () {
    cell.style.backgroundColor = '#000000';
  });
}
