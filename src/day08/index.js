import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n')

const part1 = (rawInput) => {
  const parsed = parseInput(rawInput).map(l => eval(l))

  var sum = parsed.map(l => l.length).reduce((acc, x) => acc + x)

  return rawInput.replace(/\n/g, '').length - sum
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const encodedLength = input.map(x => JSON.stringify(x).length).reduce((acc, x) => acc + x)

  return encodedLength - rawInput.replace(/\n/g, '').length
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
