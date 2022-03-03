import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('')

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  return 2 * input.filter(c => c == '(').length - input.length
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
