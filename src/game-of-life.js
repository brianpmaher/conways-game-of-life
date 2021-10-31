function createCell() {
  return {
    isAlive: false,
  }
}

export function createGrid(width, height) {
  const cells = new Array(width * height)
  for (let i = 0; i < cells.length; i++)
    cells[i] = createCell()

  return {
    width,
    height,
    cells: [],
  }
}
