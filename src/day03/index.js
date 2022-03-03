import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('').map(c => dirs[c])

const dirs = { '^': [0, 1], 'v': [0, -1], '<': [-1, 0], '>': [1, 0] }

const deliver = (path, presents) => {
  var [x, y] = [0, 0]
  path.forEach(([dx, dy]) => {
    x += dx
    y += dy
    presents[[x, y]] = true
  });
  return presents
}

const part1 = (rawInput) => {
  const path = parseInput(rawInput)

  return Object.keys(deliver(path, { '0,0': true })).length
}

const part2 = (rawInput) => {
  const path = parseInput(rawInput)
  const santa = path.filter((_, i) => i % 2 == 0)
  const robo = path.filter((_, i) => i % 2 == 1)

  const presents = deliver(robo, deliver(santa, { '0,0': true }))
  return Object.keys(presents).length
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
