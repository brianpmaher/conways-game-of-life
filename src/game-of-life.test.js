import { createGrid } from './game-of-life.js'

describe('game-of-life module', () => {
  describe('createGrid', () => {
    it('creates an empty grid with given width and height', () => {
      const width = 9
      const height = 6
      const grid = createGrid(width, height)

      grid.cells.forEach(cell => expect(cell.isAlive).toBe(false))
    })
  })
})
