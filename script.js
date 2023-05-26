"use strict";
class Minesweeper {
    gridContainer = document.querySelector(".grid-container");

    constructor() {
        this.init();
        this.gridContainer.addEventListener(
            "click",
            this.leftClickGrid.bind(this)
        );
    }

    init() {
        this.userInterface();
        this.createGrid(8);
        this.populateMines();
    }

    // generates the UI portion of the app
    userInterface() {}

    // creates a grid of size (size) for the play area
    createGrid(size) {
        for (let i = 0; i < size; i++) {
            let row = document.createElement("div");
            row.classList.add("grid-row");
            row.dataset.row = `${i + 1}`;
            this.gridContainer.insertAdjacentElement("beforeend", row);
            for (let j = 0; j < size; j++) {
                let grid = document.createElement("div");
                grid.classList.add("grid-item");
                grid.dataset.column = `${j + 1}`;
                row.insertAdjacentElement("beforeend", grid);
            }
        }
    }

    // generates 8 mines
    populateMines() {
        // randomly generate 2 numbers (x, y) between 1 and 8, 8 times
        // get row y
        // get column x (in row y)
        // add "mine" to classList
    }

    // left clicking elements
    leftClickGrid(e) {
        if (!e.target.classList.contains("grid-item")) return;
        console.log(e.target);
        // check if square has mine
        // transform contents to num of mines surrounding
    }
}

const game = new Minesweeper();
