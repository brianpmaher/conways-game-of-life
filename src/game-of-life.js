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

    _getCellNeighbors(x, y) {
      const neighbors = []

      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
          const isCellToCheck = xOffset === 0 && yOffset === 0
          if (isCellToCheck)
            continue

          const neighborX = x + xOffset
          const isXOnGrid = neighborX >= 0 && neighborX < this._width
          if (!isXOnGrid)
            continue

          const neighborY = y + yOffset
          const isYOnGrid = neighborY >= 0 && neighborY < this._height
          if (!isYOnGrid)
            break

          neighbors.push(this.getCell(neighborX, neighborY))
        }
      }

      return neighbors
    }
  }
}

export function computeNextGeneration(grid) {
  const nextGeneration = createGrid(grid._width, grid._height)

  for (let i = 0; i < grid._cells.length; i++) {
    const x = i % grid._width
    const y = Math.floor(i / grid._height)

    const currentCell = grid.getCell(x, y)
    const nextCell = nextGeneration.getCell(x, y)

    const numLivingNeighbors = grid._getCellNeighbors(x, y).filter(cell => cell.isAlive).length

    if (numLivingNeighbors === 3)
      nextCell.setAlive()
    else if (currentCell.isAlive && numLivingNeighbors === 2)
      nextCell.setAlive()
    else
      nextCell.setDead()
  }

  return nextGeneration
}

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

