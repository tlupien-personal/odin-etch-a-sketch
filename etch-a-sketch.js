const colorSquare = function (e) {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
  const oldOpacity = e.target.style.opacity;
  e.target.style.opacity = Math.min(+oldOpacity + 0.1, 1);
};

const makeSquares = function (size) {
  const gridArea = document.querySelector("#grid-area");
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let i = 0; i < size; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.style.opacity = 0;

      gridSquare.addEventListener("mouseenter", colorSquare);

      gridRow.appendChild(gridSquare);
    }
    gridArea.appendChild(gridRow);
  }
};

const resetGrid = function () {
  const oldGridArea = document.querySelector("#grid-area");
  oldGridArea.remove();
  const newGridArea = document.createElement("div");
  newGridArea.id = "grid-area";
  const body = document.querySelector("body");
  body.appendChild(newGridArea);
};

const promptForSize = function () {
  const promptText = "Enter the new number of squares per side:";
  let size = prompt(promptText);
  while (!Number.isInteger(size) && size >= 100) {
    if (size === null || size === "") {
      return null;
    }
    size = prompt(promptText);
  }
  return size;
};

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
  const size = promptForSize();
  if (size) {
    resetGrid();
    makeSquares(size);
  }
});

makeSquares(16);
