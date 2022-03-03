import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.split('x').map(x => +x))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  return input.reduce((acc, [l, w, h]) => acc + 2*l*w + 2*w*h + 2*h*l + Math.min(l*w, w*h, h*l), 0)
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return input.reduce((acc, [l, w, h]) => acc + Math.min(2*l+2*w, 2*l+2*h, 2*w+2*h) + l*w*h, 0)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
