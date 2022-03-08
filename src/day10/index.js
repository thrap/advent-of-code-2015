import run from "aocrunner"

const f = str => str.replace(/(.)(\1)*/g, (a,b) => a.length + ''+b)

const steps = (str, n) => n > 0 ? steps(f(str), n - 1) : str.length

const part1 = (input) => steps(input, 40)

const part2 = (input) => steps(input, 50)

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
