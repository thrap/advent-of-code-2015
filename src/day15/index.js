import run from "aocrunner"

const re = /.*: .* (.*), .* (.*), .* (.*), .* (.*), .* (.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x)
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const spoons = 100

  var max = 0
  for (var a = 0; a <= spoons; a++) {
    for (var b = 0; a + b <= spoons; b++) {
      for (var c = 0; a + b + c <= spoons; c++) {
        var d = spoons - a - b - c

        var product = 1
        for (var i = 0; i < 4; i++) {
          const factor = Math.max(0, a*input[0][i] + b*input[1][i] + c*input[2][i] + d*input[3][i])
          product *= factor
        }

        max = Math.max(product, max)
      }
    }
  }

  return max
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 62842880 }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: "" }
    ],
    solution: part2,
  },
  onlyTests: false,
})
