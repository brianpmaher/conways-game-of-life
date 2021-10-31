function createCell() {
  return {
    get isAlive() {
      return this._isAlive
    },

    get isDead() {
      return !this._isAlive
    },

    setAlive() {
      this._isAlive = true
    },

    setDead() {
      this._isAlive = false
    },

    _isAlive: false,
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
    getCell(x, y) {
      return this._cells[x % this._width + y * this._width]
    },

    setCellAlive(x, y) {
      this.getCell(x, y).setAlive()
    },

    setCellDead(x, y) {
      this.getCell(x, y).setDead()
    },

    _width: width,
    _height: height,
    _cells: createCells(width * height),
  }
}

export function computeNextGeneration(grid) {
  return grid
}
