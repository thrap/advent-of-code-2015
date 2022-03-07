import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n')

const part1 = (rawInput) => {
  const parsed = parseInput(rawInput).map(l => eval(l))

  var sum = parsed.map(l => l.length).reduce((acc, x) => acc + x)

  return rawInput.replace(/\n/g, '').length - sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part2Input = ``
run({
  part1: {
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
