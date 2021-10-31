function createCell() {
  return {
    isAlive: false,
  }
}

function createCells(numCells) {
  const cells = new Array(numCells)

  for (let i = 0; i < cells.length; i++)
    cells[i] = createCell()

  return cells
}

export function createGrid(width, height) {
  return {
    width,
    height,
    cells: createCells(width * height),
  }
}
