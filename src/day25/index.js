import run from "aocrunner"

const parseInput = rawInput => rawInput.match(/(\d+)[^\d]*(\d+)/).slice(1).map(x => +x)

const part1 = (rawInput) => {
  const [row, col] = parseInput(rawInput)

  const next = n => (n * 252533) % 33554393

  const f = (x, y) => (x * (x - 1) / 2) + (y - 1) * x + (y-1) * y / 2

  var n = 20151125
  for (var i = 1; i <= f(row, col); i++) {
    n = next(n)
  }

  return n
}

run({
  part1: {
    solution: part1,
  },
})
