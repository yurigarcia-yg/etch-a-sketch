//import functions

//create page with 16x16 grid of square divs.

const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  container.appendChild(column);

  for (let j = 0; j < 16; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    column.appendChild(row);
  }
}

//create hover effect for the squares

//add button at the top that will prompt user

//asking for grid size. user input max 100

//existing grid removed and new grid generated

//extra feature: random color on squares

//extra extra: each interaction darkens square 10%. maybe use opacity css property for this.
