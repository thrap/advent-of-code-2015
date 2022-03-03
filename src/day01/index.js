import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('')

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  return 2 * input.filter(c => c == '(').length - input.length
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  var floor = 0
  for (var i = 0; i < input.length; i++) {
    floor += input[i] == '(' ? 1 : -1
    if (floor == -1)
      return i + 1
  }
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
