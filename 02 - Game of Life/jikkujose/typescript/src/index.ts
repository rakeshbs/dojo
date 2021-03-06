import p5 from "p5"

import { config } from "./config"
import { conway } from "./conway"
import { getInitialBoard, translateToIndex } from "./utils"

const sketch = s => {
  const state = {
    isRunning: false,
    board: getInitialBoard(),
    instructions: null,
    isInstructionVisible: true,
  }

  s.setup = () => {
    s.createCanvas(config.board.width, config.board.height)
    s.background(config.colors.background)
    s.frameRate(config.simulation.frameRate)
  }

  s.draw = () => {
    console.log("draw")

    if (state.isRunning) {
      s.loop()
      state.board = conway(state.board)
    }

    s.background(config.colors.background)
    drawBoard(state.board)
    if (state.isInstructionVisible) {
      drawInstructions()
    }
  }

  s.keyPressed = () => {
    if (state.isInstructionVisible) {
      state.isInstructionVisible = false
      return
    }

    if (s.keyCode == 32) {
      state.isRunning = !state.isRunning
    }
  }

  s.mousePressed = () => {
    if (state.isInstructionVisible) {
      state.isInstructionVisible = false
      return
    }

    const [x, y] = translateToIndex(s.mouseX, s.mouseY)

    state.board[y][x] = !state.board[y][x]
  }

  s.mouseMoved = () => {}

  const drawBoard = board => {
    const xCellCount = board[0].length
    const yCellCount = board.length

    for (let i = 0; i < xCellCount; i++) {
      for (let j = 0; j < yCellCount; j++) {
        drawCell(i, j, board[j][i])
      }
    }
  }

  const drawCell = (
    x: number,
    y: number,
    isAlive = true,
    { size, gap, radius } = config.cell,
    { on, off, editModeOn } = config.colors
  ) => {
    const _x = x * (size + gap)
    const _y = y * (size + gap)

    const onColor = state.isRunning ? on : editModeOn

    const fillColor = isAlive ? onColor : off
    s.fill(fillColor)

    s.noStroke()
    s.rect(_x, _y, size, size, radius)
  }

  s.preload = () => {
    state.instructions = s.loadImage("./instructions.png")
  }

  const drawInstructions = text => {
    const image = state.instructions

    const centerX = (s.width - image.width) / 2
    const centerY = (s.height - image.height) / 2

    s.image(image, centerX, centerY)
  }
}

new p5(sketch)
