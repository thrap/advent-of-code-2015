import run from "aocrunner"

const parse = str => str.split(',').map(x => +x)

const parseInput = (rawInput) => rawInput.split('\n')
  .map(l => l.replace('turn ', '').replace('through ', '').split(' '))
  .map(([cmd, from, to]) => [cmd, parse(from), parse(to)])

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const grid = Array(1000).fill(0).map(_ => Array(1000).fill(false))
  input.forEach(([command, [fromX, fromY], [toX, toY]]) => {
    for (var x = fromX; x <= toX; x++) {
      for (var y = fromY; y <= toY; y++) {
        if (command == 'on') {
          grid[x][y] = true
        } else if (command == 'off') {
          grid[x][y] = false
        } else {
          grid[x][y] = !grid[x][y]
        }
      }
    }
  })

  return grid.flat().filter(on => on).length
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)
  const grid = Array(1000).fill(0).map(_ => Array(1000).fill(0))
  input.forEach(([command, [fromX, fromY], [toX, toY]]) => {
    for (var x = fromX; x <= toX; x++) {
      for (var y = fromY; y <= toY; y++) {
        if (command == 'on') {
          grid[x][y] += 1
        } else if (command == 'off') {
          grid[x][y] = Math.max(grid[x][y] - 1, 0)
        } else {
          grid[x][y] += 2
        }
      }
    }
  })

  return grid.flat().reduce((acc, v) => acc + v)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
