const RANDOM_COLOR_FACTOR = 256;
const OPACITY_INCREASE = 0.1;
const OPACITY_MAX = 1;
const OPACITY_BASE = 0;
const MAX_SIZE = 100;
const INITIAL_SIZE = 16;

const colorSquare = function (e) {
  const r = Math.round(Math.random() * RANDOM_COLOR_FACTOR);
  const g = Math.round(Math.random() * RANDOM_COLOR_FACTOR);
  const b = Math.round(Math.random() * RANDOM_COLOR_FACTOR);
  e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
  const oldOpacity = e.target.style.opacity;
  e.target.style.opacity = Math.min(
    +oldOpacity + OPACITY_INCREASE,
    OPACITY_MAX,
  );
};

const makeSquares = function (size) {
  const gridArea = document.querySelector("#grid-area");
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let i = 0; i < size; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.style.opacity = OPACITY_BASE;

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
  const promptWarning = "(the number must be a positive integer less than 100)";
  let size = +prompt(promptText);
  while (!Number.isInteger(size) || size >= MAX_SIZE || size <= 0) {
    if (size === null || size === "") {
      return null;
    }
    size = +prompt(promptText + "\n" + promptWarning);
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

makeSquares(INITIAL_SIZE);
