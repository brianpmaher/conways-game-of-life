import { createGrid, computeNextGeneration } from './game-of-life.js'
import { sleep } from './util.js'

const frameDelayMs = 1000

export async function runGame() {
  setup()

  // noinspection InfiniteLoopJS
  while (true) {
    update()
    render()
    await sleep(frameDelayMs)
  }
}

let context
let grid

function setup() {
  const canvas = document.getElementById('game-canvas')
  context = canvas.getContext('2d')
  grid = createGrid(10, 10)
}

function update() {
  grid = computeNextGeneration(grid)
}

function render() {
  context.fillStyle = 'green'
  context.fillRect(0, 0, 100, 100)

  // TODO: render grid
}
