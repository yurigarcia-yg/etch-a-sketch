const container = document.querySelector(".container");
const restart = document.querySelector(".restart");
const grid = document.querySelector(".grid-size");
const defaultColor = document.querySelector(".default");
const rainbow = document.querySelector(".rainbow");
let gridSize = 16;

function createGrid(size) {
  container.innerHTML = ""; // Clear existing grid
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let j = 0; j < size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
  }
  addMouseEnterListeners();
}

function addMouseEnterListeners() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      row.style.backgroundColor = "white";
    });
  });
}

function setRainbowMode() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const randomRGB = () => Math.floor(Math.random() * 256);
      row.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    });
  });
}

grid.addEventListener("click", () => {
  let newGridSize = prompt("Choose Grid Size 1-100");
  newGridSize = parseInt(newGridSize, 10);
  if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
    alert("Out of range");
  } else {
    gridSize = newGridSize;
    createGrid(gridSize);
  }
});

restart.addEventListener("click", () => {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.style.backgroundColor = "black";
  });
});

defaultColor.addEventListener("click", addMouseEnterListeners);

rainbow.addEventListener("click", setRainbowMode);

document.addEventListener("DOMContentLoaded", () => {
  createGrid(gridSize);
});
