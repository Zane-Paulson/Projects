"use-strict";

// Get the grid container
const grid = document.querySelector(".grid");
console.log(grid);
// Create an 8x8 grid
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.coordinate = `${row},${col}`;
        console.log(cell);
        grid.insertAdjacentElement("beforeend", cell);
    }
}
