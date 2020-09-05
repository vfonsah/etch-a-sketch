// constants & variables
const gridContainer = document.createElement("div");
const buttonsContainer = document.createElement("div");
const newGridBtn = document.createElement("button");
const clearGridBtn = document.createElement('button')
let color = [];

// element classes
gridContainer.classList.add("container");
buttonsContainer.classList.add("row");

// element IDs
newGridBtn.id = "newGridBtn";

// element textContents
newGridBtn.textContent = "New Grid";
clearGridBtn.textContent="Clear Grid";

// event listeners
newGridBtn.addEventListener("click", () => {
  let newGrid = prompt("Enter a new size for the grid", "");
  while (newGrid < 16 || newGrid > 100) {
    newGrid = prompt("You grid size must be between 16 & 100", "");
  }
  if (newGrid >= 16 && newGrid <= 100) {
    clearGrid(makeNewGrid(newGrid));
  }
});

clearGridBtn.onclick = () => {
    clearGrid();
}

// event functions
//   page functions

function makeGrid(rows, cols) {
  gridContainer.style.setProperty("--grid-cols", cols);
  gridContainer.style.setProperty("--grid-rows", rows);

  for (let i = 0; i < rows * cols; i++) {
    var cell = document.createElement("div");
    cell.id = `grid-cell-${i + 1}`;
    gridContainer.appendChild(cell).className = "grid-cell";
    cell.addEventListener("mouseover", pixelate);
  }

  return cell;
}

const pixelate = (e) => {
  for (let rgb = 0; rgb <= 2; rgb++) {
    color[rgb] = Math.floor(Math.random() * Math.floor(255));
  }
  e.target.style.backgroundColor = `rgb(${color})`;
};


const makeNewGrid = (gridSize) => {
  makeGrid(gridSize, gridSize);
};

const clearGrid = (newFun) => {
  let gridElements = gridContainer.childNodes;
  gridElements.forEach((divs) => {
    divs.style.backgroundColor = '#ffffff';
  });
};

const grid = newGridBtn.onclick
  ? (gridSize) => makeNewGrid(gridSize)
  : makeGrid(16, 16);

//   compile page elements

gridContainer.appendChild(grid);
buttonsContainer.append(newGridBtn, clearGridBtn);

const domBody = document.querySelector("body");
domBody.append(buttonsContainer, gridContainer);
