import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.split('x').map(x => +x))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  return input.reduce((acc, [l, w, h]) => acc + 2*l*w + 2*w*h + 2*h*l + Math.min(l*w, w*h, h*l), 0)
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `2x3x4
1x1x10`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 58 + 43 }
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
