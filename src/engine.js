import { createGrid, computeNextGeneration } from './game-of-life.js'
import { sleep } from './util.js'

export function runGame() {
  setup()
  startGameplayLoop()
}

function startGameplayLoop() {
  requestAnimationFrame(gameplayLoop)
}

const frameDelayMs = 100

async function gameplayLoop() {
  update()
  render()
  await sleep(frameDelayMs)

  requestAnimationFrame(gameplayLoop)
}

let canvas
let context
let grid

function setup() {
  canvas = document.getElementById('game-canvas')
  canvas.height = canvas.offsetHeight
  canvas.width = canvas.offsetWidth
  context = canvas.getContext('2d')
  grid = createGrid(100, 100)
  grid.randomize()
}

function update() {
  grid = computeNextGeneration(grid)
}

function render() {
  context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'green'

  for (let x = 0; x < grid.width; x++)
    for (let y = 0; y < grid.height; y++)
      if (grid.getCell(x, y).isAlive)
        context.fillRect(x * 10, y * 10, 10, 10)
}
