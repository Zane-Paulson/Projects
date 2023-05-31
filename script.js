"use strict";
class Minesweeper {
    gridContainer = document.querySelector(".grid-container");
    mineList = [];
    constructor() {
        this.init();

        this.gridContainer.addEventListener(
            "click",
            this.leftClickGrid.bind(this)
        );
    }

    init() {
        this.gridContainer.innerHTML = "";
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
                grid.dataset.coords = `${i + 1},${j + 1}`;
                row.insertAdjacentElement("beforeend", grid);
            }
        }
    }

    // generates 8 mines
    populateMines() {
        // randomly generate 2 numbers (x, y) between 1 and 8, 8 times
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        for (let i = 0; i < 8; i++) {
            const x = getRandomInt(1, 9);
            const y = getRandomInt(1, 9);
            // get row x
            let mineSpace = document.querySelector(`[data-row="${x}"]`);
            // get column y (in row x)
            mineSpace = mineSpace.querySelector(`[data-column="${y}"]`);
            // add "mine" to classList
            mineSpace.classList.add("mine");
            mineSpace.textContent = "\u{1F6A9}";
            this.mineList.push(mineSpace);
            console.log(this.mineList);
        }
    }

    // left clicking elements
    leftClickGrid(e) {
        if (!e.target.classList.contains("grid-item")) {
            return;
        }

        console.log(e.target, e.target.closest(".grid-row"));

        // fade out
        e.target.classList.toggle("clicked");
        e.target.classList.toggle("fade-out");

        // TODO check if square has mine
        if (e.target.classList.contains("mine")) {
            const gameover = document.querySelector(".gameover-modal");
            gameover.classList.remove("hidden");
            gameover.addEventListener("click", this.gameover.bind(this));
        }
    }

    gridLogic() {
        // flag square
    }

    gameover(e) {
        if (!e.target.classList.contains("btn__gameover")) return;

        gameover.classList.add("hidden");

        this.init();
    }
}

const game = new Minesweeper();
