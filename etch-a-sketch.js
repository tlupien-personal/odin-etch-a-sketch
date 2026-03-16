const makeSquares = function (size) {
  const gridArea = document.querySelector("#grid-area");
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let i = 0; i < size; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridRow.appendChild(gridSquare);
    }
    gridArea.appendChild(gridRow);
  }
};

makeSquares(16);
