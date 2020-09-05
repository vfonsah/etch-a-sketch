const container = document.createElement("div");
container.classList.add("container");

// functions
function makeGrid(rows, cols) {
  container.style.setProperty("--grid-cols", cols);
  container.style.setProperty("--grid-rows", rows);

  for (let i = 0; i < rows * cols; i++) {
    var cell = document.createElement("div");
    cell.id = `grid-cell-${i + 1}`;
    container.appendChild(cell).className = "grid-cell";
  }

  return cell;
}
const grid = makeGrid(16, 16);

container.appendChild(grid);

const domBody = document.querySelector("body");
domBody.appendChild(container);
