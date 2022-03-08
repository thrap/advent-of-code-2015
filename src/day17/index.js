import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(x => +x).sort((a, b) => b - a)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const f = (rest, i) => {
    if (i == input.length || rest < 0) {
      return rest == 0 ? 1 : 0
    }
    return f(rest, i+1) + f(rest-input[i], i+1)
  }

  return f(150, 0)
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
