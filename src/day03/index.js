import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('')

const dirs = { '^': [0, 1], 'v': [0, -1], '<': [-1, 0], '>': [1, 0] }

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  var [x, y] = [0, 0]
  const presents = { '0,0': true }
  input.map(c => dirs[c]).forEach(([dx, dy]) => {
    x += dx
    y += dy
    presents[[x, y]] = true
  });

  return Object.keys(presents).length
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `^v^v^v^v^v`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 2 }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: "" }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
