import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n')

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const isNice = str => {
    return /(.)\1/.test(str)
      && /([aeiou].*){3,}/.test(str)
      && ['ab', 'cd', 'pq', 'xy'].every(x => !str.includes(x))
  }
  return input.filter(s => isNice(s)).length
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
