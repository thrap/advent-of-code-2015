import run from "aocrunner"

const part1 = (input) => {
  for (var i = 0; i < 40; i++) {
    input = input.replace(/(.)(\1)*/g, (a,b) => a.length + ''+b)
  }

  return input.length
}

const part2 = (input) => {
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
