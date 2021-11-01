import { createGrid, computeNextGeneration } from './game-of-life.js'

describe('cell', () => {
  it('can be made dead', () => {
    const grid = createGrid(1, 1)
    const cell = grid.getCell(0, 0)

    cell.setAlive()

    expect(cell.isAlive).toBe(true)
  })

  it('can be made alive', () => {
    const grid = createGrid(1, 1)
    const cell = grid.getCell(0, 0)

    cell.setDead()

    expect(cell.isDead).toBe(true)
  })
})

describe('createGrid', () => {
  it('creates an empty grid with given width and height', () => {
    const width = 9
    const height = 6

    const grid = createGrid(width, height)

    for (let x = 0; x < width; x++)
      for (let y = 0; y < height; y++)
        expect(grid.getCell(x, y).isDead).toBe(true)
  })
})

describe('getCell', () => {
  it('gets the cell data at the given coordinate', () => {
    const grid = createGrid(3, 3)

    const cell = grid.getCell(1, 1)

    expect(cell.isAlive).toBe(false)
  })
})

describe('setCellAlive', () => {
  it('makes a cell at a given location alive', () => {
    const grid = createGrid(3, 3)

    grid.setCellAlive(0, 2)

    expect(grid.getCell(0, 2).isAlive).toBe(true)
  })
})

describe('setCellDead', () => {
  it('makes a cell at a given location dead', () => {
    const grid = createGrid(3, 3)

    grid.setCellDead(0, 2)

    expect(grid.getCell(0, 2).isDead).toBe(true)
  })
})

describe('computeNextGeneration', () => {
  it('a live cell with 2 live neighbors remains alive', () => {
    // n
    //   c n
    //
    const testCell = [1, 1]
    const neighborCell1 = [0, 0]
    const neighborCell2 = [2, 1]

    const grid = createGrid(3, 3)
    grid.setCellAlive(...testCell)
    grid.setCellAlive(...neighborCell1)
    grid.setCellAlive(...neighborCell2)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(...testCell).isAlive).toBe(true)
  })

  it('a live cell with 3 live neighbors remains alive', () => {
    // n
    //   c n
    //   n
    const testCell = [1, 1]
    const neighborCell1 = [0, 0]
    const neighborCell2 = [2, 1]
    const neighborCell3 = [1, 2]

    const grid = createGrid(3, 3)
    grid.setCellAlive(...testCell)
    grid.setCellAlive(...neighborCell1)
    grid.setCellAlive(...neighborCell2)
    grid.setCellAlive(...neighborCell3)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(...testCell).isAlive).toBe(true)
  })

  it('a dead cell with 3 live neighbors becomes alive', () => {
    // n
    //   c n
    //   n
    const testCell = [1, 1]
    const neighborCell1 = [0, 0]
    const neighborCell2 = [2, 1]
    const neighborCell3 = [1, 2]

    const grid = createGrid(3, 3)
    grid.setCellDead(...testCell)
    grid.setCellAlive(...neighborCell1)
    grid.setCellAlive(...neighborCell2)
    grid.setCellAlive(...neighborCell3)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(...testCell).isAlive).toBe(true)
  })

  it('a live cell with 4 live neighbors dies', () => {
    // n
    //   c n
    //   n n
    const testCell = [1, 1]
    const neighborCell1 = [0, 0]
    const neighborCell2 = [2, 1]
    const neighborCell3 = [1, 2]
    const neighborCell4 = [2, 2]

    const grid = createGrid(3, 3)
    grid.setCellAlive(...testCell)
    grid.setCellAlive(...neighborCell1)
    grid.setCellAlive(...neighborCell2)
    grid.setCellAlive(...neighborCell3)
    grid.setCellAlive(...neighborCell4)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(...testCell).isDead).toBe(true)
  })

  it('a live cell with 1 live neighbors dies', () => {
    //
    //   c
    //   n
    const testCell = [1, 1]
    const neighborCell1 = [1, 2]

    const grid = createGrid(3, 3)
    grid.setCellAlive(...testCell)
    grid.setCellAlive(...neighborCell1)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(...testCell).isDead).toBe(true)
  })

  it('a live cell with 0 live neighbors dies', () => {
    //
    //   c
    //
    const testCell = [1, 1]

    const grid = createGrid(3, 3)
    grid.setCellAlive(...testCell)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(1, 1).isDead).toBe(true)
  })

  it('a dead cell with 0 live neighbors remains dead', () => {
    //
    //   c
    //
    const testCell = [1, 1]

    const grid = createGrid(3, 3)
    grid.setCellDead(...testCell)

    const nextGrid = computeNextGeneration(grid)

    expect(nextGrid.getCell(1, 1).isDead).toBe(true)
  })
})
